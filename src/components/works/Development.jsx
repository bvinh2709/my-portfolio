
import Atom from './Atom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Box } from '@mui/material'

const Development = () => {
    return (
      <>
        <Canvas>
            <Stage environment='city' intensity={0.6}>
                <Atom />
            </Stage>
            <OrbitControls autoRotate />
        </Canvas>
        <Box
            padding='1.3rem'
            borderRadius='0.8rem' position='absolute'
            top='0.5rem' right='15rem' fontSize='0.9rem' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black', width: '10rem', height:'7rem',}}
        >More projects are under heavy development...</Box>
      </>
    )
  }

  export default Development