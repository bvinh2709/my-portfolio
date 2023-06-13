

import Cube from '../story/Cube'
import { Box, Button, Typography } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'

const Who = () => {
    const navigate = useNavigate()
    return (
      <Box
        marginTop='-70px'
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
          >
            <Canvas camera={{ fov:25, position:[5,5,5] }}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1} />
              <directionalLight position={[3,2,1]}/>
              <Cube />
            </Canvas>
          </Box>
          <Box
            flex={1} display='flex' flexDirection='column' justifyContent='center' gap='10px'
          >
            <Typography variant='h1' color='lightgray' fontSize='74px'>Think outside the box and Persue perfection</Typography>
            <Box
              display='flex' alignItems='center' gap='10px'
            >
              <img src='./img/line.png' alt='a line' height='10px' />
              <Typography variant='h2' color='lightblue' >Who I Am</Typography>
            </Box>
            <Typography color='lightgray' fontSize='18px'>Bilingual Full Stack Developer (Vietnamese, English) with experience using frontend and backend technologies. My skill set encompasses both the creation of friendly UI and the development of a robust backend system. I possess strong collaboration and problem-solving skills, which enable me to work effectively in a team environment. I am committed to continuous learning and staying up-to-date with the latest advancements in technology. Drawing on my background in customer service, I excel in managing competing tasks under pressure, meeting deadlines, and delivering high-quality products to clients. </Typography>
            <Box display='flex' justifyContent='space-between'>
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
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '5px', width: '30%'}}
                padding='10px'
                onClick={() => navigate('/memes')}
              >Why Memes Matter</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  export default Who
