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


const AboutPortfolio = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/portfolio1.jpg'
            num="02" 
            title="Universe portfolio" 
            text="Simply my portfolio. It has been modelled, lit and baked in Blender and developed in React.js."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/portfoliomodel.png'
            pic2='../../../src/assets/img/baked1.png' width='25%'
            quote1="Welcome to my universe of ideas."
            quote2="This website has been made with Three.js library, with reusable and independent components that react to state, are easily interactive and take advantage of the React ecosystem."/> 
            </Fade>

            

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/portfolio1.jpg'
            />
            </Fade>

        </div>
    )
}

export default AboutPortfolio
