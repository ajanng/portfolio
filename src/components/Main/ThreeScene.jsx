import { React, useState } from 'react'
import { Canvas } from '@react-three/fiber'

const cposition = [20, 10, 20] //[17, 12, 20]
const ThreeScene = ({children}) => {
    

    return (
        <Canvas style={{background:'black'}} camera={{ fov: 40, position: cposition}}>{children}</Canvas>
    )
}

export default ThreeScene
