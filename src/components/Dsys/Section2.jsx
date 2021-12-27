import React from 'react'
import styles from '../../styles/Section2.scss'
import Fade from 'react-reveal/Fade';

const Section1 = (props) => {
    return (
        <div className="parallax_layer2">
            <div className="bg_black"></div>
            <div className="pic">
                <img src={props.pic1} alt="" />
                <img src={props.pic2} alt="" />
            </div>

            <div className="texts">
                <p className="quote1">{props.quote1}</p>
                <p className="quote2">{props.quote2}</p>
            </div>
        </div>
    )
}

export default Section1
