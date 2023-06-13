
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Memes = () => {
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
                Memes are my Energy Source
              </Typography>
              <Box
                display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
              >
              <img src='./img/line.png' alt='a line'
              height='10rem'
              />
              <Typography
              variant='h3' color='lightblue'
              >Why Memes?</Typography>
            </Box>
            <Box>
              <Typography
              sx={{fontSize:'1.3rem'}}
              color='lightgray' padding='0.5rem'
              >
                In a world full of hustle and bustle, where energy seems to be in short supply, there is one extraordinary source that keeps me going day in and day out: Memes.
              </Typography>
              <Typography
              sx={{fontSize:'1.3rem'}}
              color='lightgray' padding='0.5rem'
            >Memes are more than just a fleeting moment of laughter. They have an incredible ability to transcend barriers and connect people from all walks of life. They create a sense of community, sparking conversations, and spreading joy across the virtual landscape. In this age of technology, where we often find ourselves glued to screens, Memes serve as a delightful reminder that we are not alone in this digital realm. </Typography>
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
                onClick={() => navigate('/achievement')}
              >See my Achievement</Button>
            </Box>
          </Box>
          <Box>
            <Box
              height='30%'
              sx={{ objectFit: 'cover', position: 'absolute',
                   top: '155%', bottom: 0, left: 0, right: 0, margin: 'auto',

              }}
              component='img'
              src = './img/memes.jpg' alt='a cat meme'
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
            src = './img/memes.jpg' alt='a cat meme'
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
              >Memes are my Energy Source</Typography>
            </Box>
            <Box
              display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
            >
              <img src='./img/line.png' alt='a line' height='10rem' />
              <Typography variant='h2' color='lightblue' >Why Memes?</Typography>
            </Box>
            <Typography
            sx={{fontSize:'1.2rem'}}
            color='lightgray'
            >In a world full of hustle and bustle, where energy seems to be in short supply, there is one extraordinary source that keeps me going day in and day out: Memes. </Typography>
            <Typography
            sx={{fontSize:'1.2rem'}}
            color='lightgray'
            >Memes are more than just a fleeting moment of laughter. They have an incredible ability to transcend barriers and connect people from all walks of life. They create a sense of community, sparking conversations, and spreading joy across the virtual landscape. In this age of technology, where we often find ourselves glued to screens, Memes serve as a delightful reminder that we are not alone in this digital realm. </Typography>
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
                onClick={() => navigate('/achievement')}
              >See my Achievement</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    )

  )
}

export default Memes
