import React from 'react'
import styles from "./NewsLetter.module.css"
const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
      Subscribe Our Newsletter
      </div>
      <div className={styles.searchCont}>
        <input type="text" className={styles.name} placeholder='Name:'/>
        <input type="text" className={styles.email} placeholder='Enter your Email' />
        <button className={styles.button}> Send</button>
      </div>
    </div>
  )
}

export default NewsLetter
