
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Burger from './Burger'
import { Box } from '@mui/material'

const WebDesign = () => {
    return (
      <>
        <Canvas>
            <Stage environment='city' intensity={0.3}>
                <Burger />
            </Stage>
            <OrbitControls autoRotate />
        </Canvas>
        <Box
            padding='20px'
            borderRadius='10px' position='absolute'
            top='100px' right='100px' fontSize='14px' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black', width: '300px', height:'100px',}}
        >Online restaurant that sells soul food and let customers check out through Stripe. <a href='https://flatburger.render.com' target="_blank" rel="noopener noreferrer">Check it out! </a></Box>
      </>
    )
  }

  export default WebDesign