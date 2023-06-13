
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Burger from './Burger'
import { Box, useMediaQuery } from '@mui/material'

const WebDesign = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
    return (
      isMobile ? (
        <>
          <Canvas>
            <Stage environment='city' intensity={0.3}>
                <Burger />
            </Stage>
            <OrbitControls autoRotate />
          </Canvas>
          <Box
              padding='1.3rem'
              borderRadius='0.8rem' position='absolute'
              top='0.5rem' right='15rem' fontSize='0.8rem' fontWeight={300}
              sx={{ backgroundColor: 'white', color:'black', width: '10rem', height:'8rem',}}
          >Online restaurant that sells soul food and let customers check out through Stripe. <a href='https://www.loom.com/share/a74c2fdb12c8410d9f33f7b133cc9008?sid=4148b6d3-4380-4cc9-bfa8-5886779b6f98' target="_blank" rel="noopener noreferrer">Check it out! </a>

          </Box>
        </>
      ) : (
        <>
          <Canvas>
            <Stage environment='city' intensity={0.3}>
                <Burger />
            </Stage>
            <OrbitControls autoRotate />
          </Canvas>
          <Box
              padding='1.3rem'
              borderRadius='0.8rem' position='absolute'
              top='6rem' right='6rem' fontSize='0.9rem' fontWeight={300}
              sx={{ backgroundColor: 'white', color:'black', width: '20rem', height:'6rem',}}
          >Online restaurant that sells soul food and let customers check out through Stripe. <a href='https://www.loom.com/share/a74c2fdb12c8410d9f33f7b133cc9008?sid=98e670cf-d78b-4676-a137-19031641d3bc' target="_blank" rel="noopener noreferrer">Check it out! </a>

          </Box>
        </>
      )


    )
  }

  export default WebDesign