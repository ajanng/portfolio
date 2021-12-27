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


const PageOblivion = () => {
    return (
        <div>
    
            <HeaderMenu />
           
            <Section1 
            pic='../../../src/assets/img/proyectos/01.png'
            num="06" 
            title="Oblivion" 
            text="Oblivion is a virtual exhibition that
            tries to reflect on the relationship between the
            between the concept of the panopticon and the sexualisation
            of women on the internet.
            "/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/02.png'
            pic2='../../../src/assets/img/proyectos/03.png'
            quote1="Oblivion: State of being unaware of what is going on around you"
            quote2="Thanks to the structure of the panopticon
            structure of the exhibition and the gazes of the
            women observing you, a reflection is made
            reflection on the fact that our society
            tries to exhibit itself but at the same time
            but at the same time it also feels watched and
            self-exploited."/> 
            </Fade>

            <Fade bottom>
            <Section3 
            video='https://player.vimeo.com/video/502812076?h=d86ad063a8'/>
            </Fade>

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/proyectos/04.png'
            pic2='../../../src/assets/img/proyectos/05.png'
            pic3='../../../src/assets/img/proyectos/06.png' />
            </Fade>

        </div>
    )
}

export default PageOblivion
