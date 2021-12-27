import React from 'react'
import styles from '../../styles/Section1.scss'
import Fade from 'react-reveal/Fade';

const Section1 = (props) => {
    return (
        <div className="parallax_layer1">
            <div className="pic">
                <img src={props.pic} alt="" />
            </div>
            <div className="intro">

                <Fade bottom>
                <h3 className="num">{props.num}</h3>
                </Fade>

                <Fade bottom>
                <h1 className="title">{props.title}</h1>
                </Fade>

                <Fade bottom>
                <p className="text">{props.text}</p>
                </Fade>

            </div>
        </div>
    )
}

export default Section1
