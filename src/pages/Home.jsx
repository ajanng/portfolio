import React from "react";
import ThreeScene from "../components/Main/ThreeScene"
import './App.scss'
import * as THREE from 'three';

import Model from "../components/Main/Model"
import { OrbitControls, SpotLight, Stars } from '@react-three/drei'
import { Suspense, ambientLight } from "react"
import HeaderMenu from "../components/Dsys/HeaderMenu";
import Footer from "../components/Main/Footer";
import About from "./About";


function App() {
  const scene = new THREE.Scene(); // initialising the scene
  scene.background = new THREE.Color( 0xff0000 );


  return (
      <div style={{width:'auto', height: '100vh', overflow:'hidden'}} >
        <HeaderMenu />
        <ThreeScene>
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
          <ambientLight intensity={3} color={'pink'}/>
          <ambientLight intensity={1} />
          <OrbitControls />
          <Stars />
        </ThreeScene>
        <Footer />

      </div>
      

      
  )
}
   
    

export default App
