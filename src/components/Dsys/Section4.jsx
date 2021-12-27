import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Section4.scss'
import Button from './Button'
const Section4 = (props) => {
    return (
        <div className="parallax_layer4">
            <div className="pic1">
                <img src={props.pic1} alt="" />
            </div>
            <div className="pic2">
                <img src={props.pic2} alt="" />
            </div>
            <div className="pic3">
                <img src={props.pic3} alt="" />
            </div>
            
                

            

        </div>
    )
}

export default Section4
