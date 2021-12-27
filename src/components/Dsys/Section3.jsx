import React from 'react'
import styles from '../../styles/Section3.scss'
import ReactPlayer from "react-player"

const Section3 = (props) => {
    return (
        <div className="parallax_layer3">
            <div className="bg_black"></div>
            <div className="video">
                <ReactPlayer
                    url={props.video}
                    width="100%"
                />
            </div>

            
        </div>
    )
}

export default Section3
