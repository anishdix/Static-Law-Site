import React from 'react'
import styles from "./HappyClient.module.css"
import { ReactComponent as Left } from '../../assets/LeftArrow.svg'
import { ReactComponent as Right } from '../../assets/RightArrow.svg'
 
import Jane from "../../assets/Jane.png"
import Devor from "../../assets/Devor.png"
import Robert from "../../assets/Robert.png"



const HappyClients = () => {
  return (
    <div className={styles.container}>
        <div className={styles.head}>
      <div className={styles.text}>What says our
        happy Clients</div>

        <div className={styles.nav}>
            <Left/>
            <Right/>
        </div>
        </div>

        <div className={styles.cards}>

        <div className={styles.cardCont}>
            <div className={styles.image}>

            <img src={Jane} alt="img" />
            </div>
            <div className={styles.name}>Jane Cooper</div>
            <div className={styles.sub}>Ceo of Hunt</div>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </p>

        </div>
        <div className={styles.GreyCardCont}>
            <div className={styles.image}>

            <img src={Devor} alt="img" />
            </div>
            <div className={styles.name}>Devon Lane</div>
            <div className={styles.sub}>Ceo of Hunt</div>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </p>

        </div>
        <div className={styles.cardCont}>
            <div className={styles.image}>

            <img src={Robert} alt="img" />
            </div>
            <div className={styles.name}>Robert Fox</div>
            <div className={styles.sub}>Ceo of Hunt</div>
            <p className={styles.desc}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </p>

        </div>
        
        
        </div>

    </div>
  )
}

export default HappyClients
