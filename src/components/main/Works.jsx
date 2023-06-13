import { useState } from 'react'
import { Box, ListItem, useMediaQuery } from '@mui/material'
import ProductDesign from '../works/ProductDesign'
import WebDesign from '../works/WebDesign'
import Development from '../works/Development'


const data = [
  "FlatBurger",
  "TicketHub",
  "Development",
]

const Works = () => {
  const [work, setWork] = useState("FlatBurger")
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    isMobile ? (
      <Box
      height='100%' display='flex' justifyContent='center' position='relative'
    >
        <Box
          display='flex' justifyContent='space-between' height='50%'
        >
            <Box
              flex={1} display='flex' alignItems='center'
            >
                <Box
                  display='flex' gap='1.2rem'
                >
                    {data.map((item) => (
                        <ListItem key={item} text={item} onClick={() => setWork(item)}

                          sx={{ fontSize: '1rem', fontWeight:'bold', color: 'white',
                            position: 'relative', padding:'0.3rem'
                          }}
                        >
                          {item}
                        </ListItem>
                    ))}
                </Box>

            </Box>
            <Box
             height='18rem'
             sx={{ objectFit: 'cover', position: 'absolute',
                  top: '13.5rem', bottom: 0, left: 0, right: 0, margin: 'auto',
             }}
            >
              {work === "TicketHub" ? (<ProductDesign

              />)
              : work === "FlatBurger" ? (<WebDesign />)
              : (<Development />)}
            </Box>

        </Box>
    </Box>
    ) : (
      <Box
      height='85vh' display='flex' justifyContent='center' position='relative'
    >
        <Box
          width='90rem' display='flex' justifyContent='space-between'
        >
            <Box
              flex={1} display='flex' alignItems='center'
            >
                <Box
                  display='flex' flexDirection='column' gap='1.2rem'
                >
                    {data.map((item) => (
                        <ListItem key={item} text={item} onClick={() => setWork(item)}
                          fontSize='5.5rem' fontWeight='bold' color='transparent'
                          position='relative'
                          sx={{ fontSize: '5.5rem', fontWeight:'bold', color: 'white',
                            position: 'relative'
                          }}
                        >
                          {item}
                        </ListItem>
                    ))}
                </Box>

            </Box>
            <Box
              flex={1}
            >
              {work === "TicketHub" ? (<ProductDesign />)
              : work === "FlatBurger" ? (<WebDesign />)
              : (<Development />)}
            </Box>

        </Box>
    </Box>
    )

  )
}

export default Works
