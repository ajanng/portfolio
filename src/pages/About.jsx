import React from 'react'
import HeaderMenu from '../components/Dsys/HeaderMenu'
import Button from '../components/Dsys/Button'
import styles from '../styles/About.scss'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const About = () => {
    return (
        <div className="container">
            <HeaderMenu />
            <div className="bg"></div>
            <div className="left">
            <Fade bottom>
                <div className="intro">
                    <h3>01</h3>
                    
                    <h1>Graphic and interaction designer</h1>
                    
                    <p>Hi, I'm Angélica Jiménez and I'm a graphic and interaction designer, graduated from the Escuela Superior de Diseño de Madrid.
                        <br/><br/>The conceptual process is my favourite part of design and I strive to create strategic ideas and clear messages.
                        <br/><br/>At the moment I'm studying a Master in Interactive Design at the Escuela Superior de Diseño, training in graphic user interface design, user experience, web page layout with advanced libraries and the programming of these. I am also continuing my training in 3D modelling and lighting, and its application in augmented reality environments and web pages.
                        <br/><br/>
                    </p>
                    <Button title={'Hire me!'} class={'purple'}/>
                </div>
            </Fade>

            <Fade bottom>
                <div className="skills">
                    <h2>Skills</h2>
                    <p className="regular">I am proficient in branding and GUI design, as well as user experience techniques and HTML and CSS languages, and I am currently expanding my knowledge in advanced web layout libraries such as React.js. 
                    <br/><br/>I know 3D modelling and lighting, both in Cinema 4d and Blender, and I am also learning its application in augmented reality environments and web pages, with libraries like Three.js.</p>
                    <div className="list">
                        <div className="list_left">
                            <p className="bold">Interaction design</p>
                            <p className="bold">GUI design</p>
                            <p className="bold">Branding</p>
                            <p className="bold">3D modelling</p>
                        </div>
                        <div className="list_right">
                            <p className="bold">Front end</p>
                            <p className="bold">UX design</p>
                            <p className="bold">Creative code</p>
                            <p className="bold">Motion</p>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade bottom>
                <div className="tools">
                    <h2>Tools</h2>
                    <div className="list">
                        <div className="item">
                            <p className="bold">Photoshop</p>
                            <progress value="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">Illustrator</p>
                            <progress value="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">InDesing</p>
                            <progress value="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">After Effects</p>
                            <progress value="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">Figma</p>
                            <progress value="100" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">HTML</p>
                            <progress value="90" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">CSS and SASS</p>
                            <progress value="90" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">Cinema 4D</p>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">Blender</p>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">JavaScrip</p>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">React.js</p>
                            <progress value="60" max="100"></progress>
                        </div>
                        <div className="item">
                            <p className="bold">Three.js</p>
                            <progress value="60" max="100"></progress>
                        </div>
                     
                    </div>

                </div>
                </Fade>
            </div>
            <div className="right">
                <Bounce>
                <div className="pic">
                    <img src="../../../src/assets/img/photomemo2.png" />
                </div>
                </Bounce>

                <Fade bottom>
                <div className="studies">
                    <h2>Studies</h2>
                    <p className="bold">Graphic Design Degree at Escuela Superior de Diseño (Madrid)
                                        <br/><br/>Master's Degree in Interactive Design at Escuela Superior de Diseño (Madrid)<br/><br/></p>
                    <p className="regular">Collage course at Círculo de Bellas Artes (Madrid)
                                        <br/><br/>Art and philosophy course at Círculo de Bellas Artes (Madrid)
                                        <br/><br/>Course of exhibition curatorship at Círculo de Bellas Artes (Madrid)
                                        <br/><br/>Design and philosophy course at EINA (Barcelona)
                                        <br/><br/>Course in art and persuasion at UNED (Madrid)
                                        <br/><br/>Three.js course by Bruno Simon </p>
                </div>
                </Fade>
                <Fade bottom>
                    <div className="experience">
                        <h2>Experience</h2>
                        <p className="bold">Design internship at Cocota Studio (4 months)</p>
                    </div>
                    
                   
                    <div className="contacts"> 
                        <h2>Contact</h2>
                        <div className="contact">
                            <img src="../../../src/assets/img/mail.png" />
                            <p className="regular">angelicajanng@gmail.com</p>
                        </div>
                        <div className="contact">
                            <img src="../../../src/assets/img/phone.png" />
                            <p className="regular">626 928 729</p>
                        </div>
                        <div className="contact">
                            <img src="../../../src/assets/img/linkedin.png" />
                            <p className="regular">Angélica Jiménez</p>
                        </div>
                    </div>
                    
                    
                
                </Fade>
            </div>
            
        </div>
            
    )
}

export default About
