import React from 'react'
import styles from "./Faq.module.css"
import {ReactComponent as Plus } from "../../assets/Plus.svg"
const Faq = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>FAQ</div>
        <div className={styles.body}>
            <div> <p className={styles.desc}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
            <div className={styles.rightTab}>
                <div className={styles.subHead}>Do I need a personal injury report?</div>
                <div className={styles.subDesc}> Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exer. Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                    </div>
                    <div className={styles.optionCont}>
                        <div className={styles.option}>
                            How much is my case worth?
                        </div>
                        <div>
                            <Plus/>
                        </div>
                    </div>
                    <div className={styles.optionCont}>
                        <div className={styles.option}>
                        What should I do right after car accidect
                        </div>
                        <div>
                            <Plus/>
                        </div>
                    </div>
                    <div className={styles.optionCont}>
                        <div className={styles.option}>
                            How much is my case worth?
                        </div>
                        <div>
                            <Plus/>
                        </div>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Faq
