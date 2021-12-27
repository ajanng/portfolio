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


const PageTypography = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/proyectos/type01.png'
            num="08" 
            title="#3EFF3F Synesthetic typography" 
            text="What is #3EFF3F? It is a project of variable typography that reacts to
            sensors. From the moment the user walks down the street and sees a poster promoting a festival in a special way, the
            a festival in a special way as the poster responds to their movements,
            to the online presentation of the festival on the web where you can choose a song and the typography moves
            a song and the typography moves to the rhythm of the song."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/type02.png'
            pic2='../../../src/assets/img/proyectos/type03.png'
            quote1="Coloured hearing or sound vision."
            quote2="Typography will serve as a new way of capturing the attention of the user
            and immerse them in the experience of a festival but online. During
            the development of this project, research has been carried out on how to make a variable typography
            variable typography and the different ways to make it react to sensors, from the use of an Arduino
            using an Arduino board and a music intensity sensor to the research of the Tense library.
            the investigation of the TenseFlow library to capture the movement of the computer's
            the computer's camera."/> 
            </Fade>

            <Fade bottom>
            <Section3 
            video='https://player.vimeo.com/video/505024705?h=00c6ebf233'/>
            </Fade>


        </div>
    )
}

export default PageTypography
