
import Cube from '../story/Cube'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'

const Who = () => {
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
                Think outside the box and Pursue perfection
              </Typography>
              <Box
                display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
              >
              <img src='./img/line.png' alt='a line'
              height='10rem'
              />
              <Typography
              variant='h2' color='lightblue'
              >Who I Am</Typography>
            </Box>
            <Box>
              <Typography
              sx={{fontSize:'1.3rem'}}
              color='lightgray' padding='0.5rem'
              >
                Bilingual Full Stack Developer (Vietnamese, English) with experience using frontend and backend technologies. My skill set encompasses both the creation of friendly UI and the development of a robust backend system. I possess strong collaboration and problem-solving skills, which enable me to work effectively in a team environment. I am committed to continuous learning and staying up-to-date with the latest advancements in technology. Drawing on my background in customer service, I excel in managing competing tasks under pressure, meeting deadlines, and delivering high-quality products to clients.
              </Typography>
            </Box>
            <Box
              display='flex' justifyContent='space-between'
            >
              <Button
                sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.5rem', width: '30%'}}
                padding='0.8rem'
                onClick={() => navigate('/works')}
              >See my Works</Button>
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '30%'}}
                padding='0.8rem'
                onClick={() => navigate('/achievement')}
              >See my Achievement</Button>
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '30%'}}
                padding='0.8rem'
                onClick={() => navigate('/memes')}
              >Why Memes Matter</Button>
            </Box>
          </Box>
          <Box>
            <Box
              height='50%'
              sx={{ objectFit: 'cover', position: 'absolute',
                   top: '220%', bottom: 0, left: 0, right: 0, margin: 'auto',
              }}
            >
              <Canvas camera={{ fov:25, position:[5,5,5] }}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]}/>
                <Cube />
              </Canvas>
            </Box>
          </Box>
        </Box>
      </Box>
      ) : (
        <Box
        // marginTop='-70px'
        height='100%'
        display='flex'
        justifyContent='center'
        padding='0.5rem'
      >
        <Box
          height='50%'
          // width='100%'
          // width='1400px'
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
            flex={1} display='flex' flexDirection='column' justifyContent='center' gap='1rem'
          >
            <Box display='flex' justifyContent='center' >
              <Typography
              variant="h1" color='lightgray' padding='0.5rem'
              sx={{fontSize: isMobile ? '2rem' : '4.5rem', display: isMobile ? 'flex' : '',
                    justifyContent: isMobile ? 'center' : 'none'
                }}
              >Think outside the box and Pursue perfection</Typography>
            </Box>
            <Box
              display='flex' alignItems='center' gap='0.5rem' padding='0.5rem'
            >
              <img src='./img/line.png' alt='a line'
              height='10rem'
              />
              <Typography
              variant='h2' color='lightblue'
              >Who I Am</Typography>
            </Box>
            <Typography
            sx={{fontSize: isMobile ? '1.3rem' : '1.5rem'}}
            color='lightgray' padding='0.5rem'
            >Bilingual Full Stack Developer (Vietnamese, English) with experience using frontend and backend technologies. My skill set encompasses both the creation of friendly UI and the development of a robust backend system. I possess strong collaboration and problem-solving skills, which enable me to work effectively in a team environment. I am committed to continuous learning and staying up-to-date with the latest advancements in technology. Drawing on my background in customer service, I excel in managing competing tasks under pressure, meeting deadlines, and delivering high-quality products to clients. </Typography>
            <Box
              display='flex' justifyContent='space-between'
            >
              <Button
                sx={{backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.5rem', width: '30%'}}
                padding='0.8rem'
                onClick={() => navigate('/works')}
              >See my Works</Button>
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '30%'}}
                padding='0.8rem'
                onClick={() => navigate('/achievement')}
              >See my Achievement</Button>
              <Button
                sx={{ backgroundColor: 'lightyellow', color: 'black', border: 'none', borderRadius: '0.3rem', width: '30%'}}
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

  export default Who
