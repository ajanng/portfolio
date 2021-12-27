import React from 'react'
import HeaderMenu from '../components/Dsys/HeaderMenu'
import Section1 from '../components/Dsys/Section1'
import Section2 from '../components/Dsys/Section2'

import styles from '../styles/AboutPortfolio.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Section3 from '../components/Dsys/Section3'
import Section4 from '../components/Dsys/Section4'
import Button from '../components/Dsys/Button'
import Fade from 'react-reveal/Fade';


const PageToDoList = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/proyectos/todo1.png'
            num="07" 
            title="To do list" 
            text="To do list is a task organisation tool designed in Figma and developed with React.js and Node.js."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/todo2.png'
            pic2='../../../src/assets/img/proyectos/todo3.png'
            /> 
            </Fade>

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/proyectos/todo4.png'
           />
            </Fade>

        </div>
    )
}

export default PageToDoList
