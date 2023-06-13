
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
            width='300px' height='100px' padding='20px'
            borderRadius='10px' position='absolute'
            top='100px' right='100px' fontSize='14px' fontWeight={300}
            sx={{ backgroundColor: 'white', color:'black',}}
        >More projects are under heavy development...</Box>
      </>
    )
  }

  export default Development