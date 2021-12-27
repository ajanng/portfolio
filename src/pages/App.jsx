import React from "react";
import ThreeScene from "../components/Main/ThreeScene"
import './App.scss'
import * as THREE from 'three';

import ModelTexture from "../components/Main/Model"
import { OrbitControls, SpotLight, Stars } from '@react-three/drei'
import { Suspense, ambientLight } from "react"
import HeaderMenu from "../components/Dsys/HeaderMenu";
import Footer from "../components/Main/Footer";
import About from "./About";
import Home from "./Home";

import { Routes, Route } from "react-router-dom";
import AboutPortfolio from "./AboutPortfolio";
import PageExtremophiles from "./PageExtremophiles";
import PageDecisions from "./PageDecisions";
import PageAion from "./PageAion";
import PageOblivion from "./PageOblivion";
import PageToDoList from "./PageToDoList";
import PageTypography from "./PageTypography";


function App() {
  const scene = new THREE.Scene(); // initialising the scene
  scene.background = new THREE.Color( 0xff0000 );


  return (
      <div >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about-portfolio" element={<AboutPortfolio/>}/>

          <Route path="/decisions" element={<PageDecisions/>}/>
          <Route path="/aion" element={<PageAion/>}/>
          <Route path="/extremophiles" element={<PageExtremophiles/>}/>
          <Route path="/oblivion" element={<PageOblivion/>}/>
          <Route path="/todolist" element={<PageToDoList/>}/>
          <Route path="/typography" element={<PageTypography/>}/>

        </Routes>

      </div>
      

      
  )
}
   
    

export default App
