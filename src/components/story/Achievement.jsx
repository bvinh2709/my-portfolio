
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Achievement = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    isMobile ? (
      <Box
          height='100%'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          maxHeight='120%'
          padding='0.3rem'
        >
          <Box
            height='50%'
            maxWidth='100%'
            display='flex'
            justifyContent='space-between'
          >
            <Box
              flex={2}
              flexDirection='column'
              display='flex'
              justifyContent='center'
              gap='1rem'
            >
              <Typography
                variant="h1" color='lightgray' padding='0.5rem'
                sx={{fontSize: '2rem', display: 'flex',
                      justifyContent:'center'
                }}
              >
                Certificate Of Completion
              </Typography>
              <Box
                display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
              >
              <img src='./img/line.png' alt='a line'
              height='10rem'
              />
              <Typography
              variant='h2' color='lightblue'
              >What I Got</Typography>
            </Box>
            <Box>
              <Typography
              sx={{fontSize:'1.3rem'}}
              color='lightgray' padding='0.5rem'
              >
                After making a brave decision, I have achieved the certificate of completion from Flatiron School and graduated as a Software Engineer. I followed through with an intense, life-changing education. I have proved myself that I have what it takes to launch a career in the worlds fastest growing industry.
              </Typography>
            </Box>
            <Box
              display='flex' justifyContent='space-between'
            >
              <Button
                sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.5rem', width: '48%'}}
                padding='0.8rem'
                onClick={() => navigate('/works')}
              >See my Works</Button>
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '48%'}}
                padding='0.8rem'
                onClick={() => navigate('/memes')}
              >Why Memes Matter</Button>
            </Box>
          </Box>
          <Box>
            <Box
              height='30%'
              sx={{ objectFit: 'cover', position: 'absolute',
                   top: '120%', bottom: 0, left: 0, right: 0, margin: 'auto',

              }}
              component='img'
              src = './img/cert.png' alt='certificate'
              // sx={{  top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
              //       width: '70%', height:'70%',
              //   }}
            >

            </Box>
          </Box>
        </Box>
      </Box>
    ) : (
      <Box
        height='100%'
        display='flex'
        justifyContent='center'
      >
        <Box
          height='100vh'
          width='90rem'
          display='flex'
          justifyContent='space-between'
        >
          <Box
            flex={1}
            component='img'
            src = './img/cert.png' alt='certificate'
            sx={{  top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
                   width: '70%', height:'70%',
              }}
              padding='1rem'
          >
          </Box>
          <Box
            flex={1} display='flex' flexDirection='column' justifyContent='center' gap='1rem'
          >
            <Box display='flex' justifyContent='center' >
              <Typography
              variant="h1" color='lightgray' padding='0.5rem'
              sx={{fontSize: '4.5rem'}}
              >Certificate Of Completion</Typography>
            </Box>
            <Box
              display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
            >
              <img src='./img/line.png' alt='a line' height='10rem' />
              <Typography variant='h2' color='lightblue' >What I Got?</Typography>
            </Box>
            <Typography
            sx={{fontSize:'1.2rem'}}
            color='lightgray' padding='0.5rem'
            >After making a brave decision, I have achieved the certificate of completion from Flatiron School and graduated as a Software Engineer. I followed through with an intense, life-changing education. I have proved myself that I have what it takes to launch a career in the worlds fastest growing industry. </Typography>
            <Box
              display='flex' justifyContent='space-between'
            >
              <Button
                sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.5rem', width: '49%'}}
                padding='0.8rem'
                onClick={() => navigate('/works')}
              >See my Works</Button>

              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '49%'}}
                padding='0.8rem'
                onClick={() => navigate('/memes')}
              >Why Memes Matter</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    )

  )
}

export default Achievement
