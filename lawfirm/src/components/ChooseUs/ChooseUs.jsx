import React from 'react'
import styles from "./ChooseUs.module.css"
import Card from './Card'
const ChooseUs = () => {
  return (
    <div>
      <div className={styles.heading}>
      Why Choose us?
      </div>
      <div className={styles.CardCont}>
        <Card text="98% Success Rate"/>
        <Card text="100% Success Rate" greyBG={true}/>
        <Card text="100% Success Rate"/>

      </div>
    </div>
  )
}

export default ChooseUs
