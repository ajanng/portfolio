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


const PageAion = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/proyectos/aion01.png'
            num="03" 
            title="Aion" 
            text="Aion is a calendar application
            which is used to organise events,
            events, subjects and workshops of the students of the
            the Escuela Superior de Diseño de Madrid.
            
            It can be used by students and
            teachers to the organisation of the school, as well as
            school's organisation, as well as being able to create events,
            create groups, filter tasks and personalise
            your profile."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/1.png'
            pic2='../../../src/assets/img/proyectos/2.png'
            /> 
            </Fade>

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/proyectos/3.png'
           />
            </Fade>

        </div>
    )
}

export default PageAion
