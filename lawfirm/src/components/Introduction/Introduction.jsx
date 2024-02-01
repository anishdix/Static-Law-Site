import React from 'react'
import styles from "./Introduction.module.css"
const Introduction = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>
        Let’s Introduce Ourself
        </div>
        <div className={styles.about}>
        <span className={styles.introHead}>Criminal Lawyer</span>
        <span className={styles.intro}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exercitation
            </span>
        </div>
      
    </div>
  )
}

export default Introduction
