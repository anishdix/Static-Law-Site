import React from 'react'
import styles from "./Footer.module.css"
import {ReactComponent as Logo } from "../../assets/Logo.svg"
import Icons from "../../assets/Icons.png"
import CopyRights from "../../assets/CopyRights.png"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
        <div>
            <Logo/>
        </div>
        <div className={styles.tabs}>
            <div>Home</div>
            <div>Attorney</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
        <div>
        <img src={Icons} alt="" />
        </div>
        </div>
        <div className={styles.image}>
            <img src={CopyRights} alt="" />
        </div>
      
    </div>
  )
}

export default Footer
