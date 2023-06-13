
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
            padding='1.3rem'
            borderRadius='0.8rem' position='absolute'
            top='6rem' right='6rem' fontSize='0.9rem' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black', width: '20rem', height:'6rem',}}
        >Ticket hub where concert goers can purchase tickets and check their profile. <a href='https://www.loom.com/share/af6b1504c8ca4a14b705afb3c5c93871?sid=dbc16216-2434-4afc-a8cd-1ac4286e4a56' target="_blank" rel="noopener noreferrer">Check it out! </a></Box>
      </>
    )
  }

  export default ProductDesign