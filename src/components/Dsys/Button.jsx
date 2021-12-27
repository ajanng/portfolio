import React, { Children } from 'react'
import styles from '../../styles/Button.scss'
const Button = (props) => {

    
    return (
            <button className={props.class}>
                 <div className="pic">
                       <img src={props.pic}/> 
                </div>
                <h2 className="title">
                  {props.title}
                </h2>
             </button>

        
        
    )
}

export default Button
