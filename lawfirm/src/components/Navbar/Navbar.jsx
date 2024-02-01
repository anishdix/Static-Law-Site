import React from 'react'
import styles from "./Navbar.module.css"
import {ReactComponent as Logo} from "../../assets/Logo.svg"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <div className={styles.midNav}>
        <span>Home</span>
        <span>Attorneys</span>
        <span>Practice Area</span>
        <span>About Us</span>
      </div>
      <button className={styles.button}>Contact Now</button>
      
    </nav>
  )
}

export default Navbar
