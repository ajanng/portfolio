import React from 'react'
import Button from './Button'
import styles from '../../styles/HeaderMenu.scss'
import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
    
    return (
        <div className="header_menu">

           

            <div className="menu">
                <NavLink to="/">
                    <Button title={'Home'} class={'white'}/>
                </NavLink>
                <NavLink to="/about">
                    <Button title={'About me'} class={'purple'}/>
                </NavLink>
                <NavLink to="/about-portfolio">
                    <Button title={'About this portfolio'} class={'large'}/>
                </NavLink>
            </div>
            
            
                     
                
               
                
            
        </div>
    )
}

export default HeaderMenu
