import React from 'react'
import Button from '../Dsys/Button'
import styles from '../../styles/Footer.scss'
const Footer = () => {
    return (
        <div className="footer">
            <Button title={'Move to explore and click on the screen to see my proyects'} class={'overlay'} pic={'../../../src/assets/img/mouse.png'} />
        </div>
    )
}

export default Footer
