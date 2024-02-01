import React from 'react'
import styles from "./Hero.module.css"
import { ReactComponent as HeroImg } from '../../assets/HeroImg.svg'
// import { ReactComponent as MsgBox } from '../../assets/Message.svg'

const hero = () => {
  return (
    <div className={styles.heroMain}>
        <div className={styles.heroText}>
        <span className={styles.five}>You don’t have to </span>
        <span className={styles.seven}>Fight them Alone.</span>
        <span className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
             curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
             hac massa gravida arcu interdum proin curae.
        </span>
        <div className={styles.searchCont}>
            <input type="text"className={styles.search} placeholder="Enter your email address"/>
            <button className={styles.button}>Let's Talk</button>

        </div>
        </div>
        <div className={styles.heroImg}>

        <HeroImg/>
        </div>
      
    </div>
  )
}

export default hero
