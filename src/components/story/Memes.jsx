
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Memes = () => {
    const navigate = useNavigate()
  return (
    <Box
        height='100vh'
        display='flex'
        justifyContent='center'
      >
        <Box
          height='100vh'
          width='1400px'
          display='flex'
          justifyContent='space-between'
        >
          <Box
            flex={1}
            component='img'
            src = './img/memes.jpg' alt='certificate'
            sx={{  top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
                   width: '70%', height:'70%',
              }}
              padding='30px'
          >
          </Box>

          <Box
            flex={1} display='flex' flexDirection='column' justifyContent='center' gap='10px'
          >
            <Typography variant='h1' color='lightgray' fontSize='74px'>Memes are my Energy Source</Typography>
            <Box
              display='flex' alignItems='center' gap='10px'
            >
              <img src='./img/line.png' alt='a line' height='10px' />
              <Typography variant='h2' color='lightblue' >Why Memes?</Typography>
            </Box>
            <Typography color='lightgray' fontSize='18px'>In a world full of hustle and bustle, where energy seems to be in short supply, there is one extraordinary source that keeps me going day in and day out: Memes. </Typography>
            <Typography color='lightgray' fontSize='18px'>Memes are more than just a fleeting moment of laughter. They have an incredible ability to transcend barriers and connect people from all walks of life. They create a sense of community, sparking conversations, and spreading joy across the virtual landscape. In this age of technology, where we often find ourselves glued to screens, Memes serve as a delightful reminder that we are not alone in this digital realm.</Typography>
            <Button
              sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
              padding='10px'
              onClick={() => navigate('/works')}
            >See my Works</Button>
            <Button
              sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
              padding='10px'
              onClick={() => navigate('/achievement')}
            >See my Achievement</Button>

          </Box>
        </Box>
      </Box>
  )
}

export default Memes
