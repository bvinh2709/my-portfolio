
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Achievement = () => {
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
            src = './img/cert.png' alt='certificate'
            sx={{  top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
                   width: '70%', height:'70%',
              }}
              padding='30px'
          >
          </Box>
          <Box
            flex={1} display='flex' flexDirection='column' justifyContent='center' gap='10px'
          >
            <Typography variant='h1' color='lightgray' fontSize='74px'>Certificate Of Completion</Typography>
            <Box
              display='flex' alignItems='center' gap='10px'
            >
              <img src='./img/line.png' alt='a line' height='10px' />
              <Typography variant='h2' color='lightblue' >What I Got?</Typography>
            </Box>
            <Typography color='lightgray' fontSize='18px'>After making a brave decision, I have achieved the certificate of completion from Flatiron School and graduated as a Software Engineer. I followed through with an intense, life-changing education. I have proved myself that I have what it takes to launch a career in the worlds fastest growing industry. </Typography>
            <Button
              sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
              padding='10px'
              onClick={() => navigate('/works')}
            >See my Works</Button>

            <Button
              sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
              padding='10px'
              onClick={() => navigate('/memes')}
            >Why Memes Matter</Button>
          </Box>
        </Box>
      </Box>
  )
}

export default Achievement
