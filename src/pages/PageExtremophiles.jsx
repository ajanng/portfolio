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


const PageExtremophiles = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/proyectos/ex1.png'
            num="05" 
            title="What on earth? Extremophiles." 
            text="What on earth is a 3D audiovisual project
            3D science outreach project for teenagers.
            
            In collaboration
            with Delia Gonzalez and Xeli López, and
            made with Cinema 4D and After Effects."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/ex2.png'
            pic2='../../../src/assets/img/proyectos/ex6.png'
            quote1="“If you look hard enough, you will find“,    Platón."
            quote2="An extremophile is an organism that lives in extreme conditions, meaning conditions that are very different from those of most life forms on Earth. 
            The discovery of these organisms on Earth confirms the possibility of finding life on other planets."/> 
            </Fade>

            <Fade bottom>
            <Section3 
            video='https://player.vimeo.com/video/507060223?h=992195b097'/>
            </Fade>

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/proyectos/ex3.png'
            pic2='../../../src/assets/img/proyectos/ex4.png'
            pic3='../../../src/assets/img/proyectos/ex5.png' />
            </Fade>

        </div>
    )
}

export default PageExtremophiles
