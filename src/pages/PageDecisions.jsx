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
            pic='../../../src/assets/img/proyectos/decisions1.png'
            num="04" 
            title="Decisions" 
            text="Decisions is an interactive short film that seeks to act as a tool for
            as a tool for managing emotions, solving problems and creating closer bonds between adolescents to
            closer links between adolescents so that they are able to express their emotional state to the people around them.
            their emotional state to the people around them. The final pieces are a prototype 
            of the short film's website, the credit titles and a pack of cards with the project's identity."/>
            
            <Fade bottom>
            <Section2 
            pic1='../../../src/assets/img/proyectos/decisions2.png'
            pic2='../../../src/assets/img/proyectos/decisions3.png'
            quote1="“Listen to what people think (...) and invite different stakeholders to actively participate in the
            stakeholders to actively participate in the
            design process.
            Thus conceived, Design
            is a social activity,
            an activity that cannot be
            cannot be separated from the
            context of people's
            people's lives“ Klaus Krippendorff The Semantic Turn"
            quote2="The rise of new technologies has intensified individuality among young people.
            young people. At first glance, social networks seem to favour communication,
            but the affective and trust component is lost when suffering episodes of anxiety, as well as creating insecurities and bullying
            anxiety, as well as creating insecurities and bullying situations among young people. 
            This, together with the problems already suffered by adolescents, has given rise to a generation of young people with neglected mental health."/> 
            </Fade>

            <Fade bottom>
            <Section3 
            video='https://player.vimeo.com/video/595452872?h=0f045c1e52'/>
            </Fade>
            <Fade bottom>
            <Section3 
            video='https://player.vimeo.com/video/595466702?h=6c0e1dd82a'/>
            </Fade>

            <Fade bottom>
            <Section4
            pic1='../../../src/assets/img/proyectos/decisions4.png'
            pic2='../../../src/assets/img/proyectos/decisions5.png'
            pic3='../../../src/assets/img/proyectos/decisions6.png' />
            </Fade>

        </div>
    )
}

export default PageExtremophiles
