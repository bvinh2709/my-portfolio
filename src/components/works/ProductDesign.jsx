
import Concert from './Concert'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Box } from '@mui/material'

const ProductDesign = () => {
    return (
      <>
        <Canvas>
            <Stage environment='city' intensity={0.6}>
                <Concert />
            </Stage>
            <OrbitControls autoRotate />
        </Canvas>
        <Box
            width='300px' height='100px' padding='20px'
            borderRadius='10px' position='absolute'
            top='100px' right='100px' fontSize='14px' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black',}}
        >Ticket hub where concert goers can purchase tickets and check their profile. <a href='https://flatburger.render.com' target="_blank" rel="noopener noreferrer">Check it out! </a></Box>
      </>
    )
  }

  export default ProductDesign