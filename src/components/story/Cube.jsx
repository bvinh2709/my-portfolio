import { useRef } from 'react'
import {PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
    useFrame((state)=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial >
            <RenderTexture attach="map">
                <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 2]}
                />
                <color attach="background" args={["lightblue"]} />
                <Text ref={textRef} fontSize={1} color="black">
                    Hi! Im Vinh
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
