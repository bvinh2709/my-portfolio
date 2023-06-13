
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
            top='6rem' right='6rem' fontSize='0.9rem' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black', width: '20rem', height:'6rem',}}
        >More projects are under heavy development...</Box>
      </>
    )
  }

  export default Development