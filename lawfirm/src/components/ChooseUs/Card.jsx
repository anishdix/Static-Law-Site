import React from 'react'
import styles from "./Card.module.css"
import {ReactComponent as Gift} from "../../assets/Gift.svg"
const Card = ({text,greyBG}) => {
  return (
    greyBG?
    (<div className={styles.gCard}>
        <div className={styles.image}>
        <Gift/>
        </div>
        <div className={styles.text}>
            {text}
        </div>
        <div className={styles.intro}>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.

        </div>
        <button className={styles.button}>Read More</button>
      
    </div>)
    :
    (<div className={styles.card}>
        <div className={styles.image}>
        <Gift/>
        </div>
        <div className={styles.text}>
            {text}
        </div>
        <div className={styles.intro}>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.

        </div>
        <button className={styles.button}>Read More</button>
      
    </div>)
  )
}

export default Card
