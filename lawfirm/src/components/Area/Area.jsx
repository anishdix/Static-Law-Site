import React from 'react'
import styles from "./Area.module.css"
import Img1 from "../../assets/img1.png"
import Img2 from "../../assets/Img2.png"
import Img3 from "../../assets/Img3.png"
import Img4 from "../../assets/Img4.png"
import Img5 from "../../assets/Img5.png"
import Img6 from "../../assets/Img6.png"



const Area = () => {
  return (
    <div className={styles.areaCont}>
      <div className={styles.heading}>
      Area of Practices
      </div>

      <div className={styles.container}>
      <img src={Img1} alt="Image1" className={styles.image} />
      <span className={styles.text1}>
      BUSINESS LAW
      </span>
      <img src={Img2} alt="Image2" />
      <span className={styles.text2}>
      Partnership LAW
      </span>
      </div>

      <div className={styles.container}>
      <img src={Img3} alt="Image3" />
      <span className={styles.text3}>
      REAL ESTATE LAW
      </span>
      <img src={Img4} alt="Image4" />
      <span className={styles.text4}>
      BUSINESS LAW
      </span>

      </div>
      <div className={styles.container}>
      <img src={Img5} alt="Image5" />
      <span className={styles.text5}>
      LANDLORD DISPUTES
      </span>
      <img src={Img6} alt="Image6" />
      <span className={styles.text6}>
      ELDER ABUSE
      </span>

      </div>
      
    </div>
  )
}

export default Area

