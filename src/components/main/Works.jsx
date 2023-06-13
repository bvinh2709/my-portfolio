import { useState } from 'react'
import { Box, List } from '@mui/material'
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
  return (
    <Box
      height='100vh' display='flex' justifyContent='center' position='relative' marginTop='-150px'
    >
        <Box
          width='1400px' display='flex' justifyContent='space-between'
        >
            <Box
              flex={1} display='flex' alignItems='center'
            >
                <Box
                  display='flex' flexDirection='column' gap='20px'
                >
                    {data.map((item) => (
                        <List key={item} text={item} onClick={() => setWork(item)}
                          fontSize='90px' fontWeight='bold' color='transparent'
                          position='relative'
                          sx={{ fontSize: '70px', fontWeight:'bold', color: 'white',
                            position: 'relative'
                          }}
                        >
                          {item}
                        </List>
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
}

export default Works
