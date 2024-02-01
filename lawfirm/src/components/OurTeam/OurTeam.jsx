import React from 'react'
import styles from "./OurTeam.module.css"
import Daniel from "../../assets/Daniel.png"
import Sanfolle from "../../assets/Sanfole.png"
import Nik from "../../assets/Nik.png"
import Haldone from "../../assets/Haldone.png"
import Collen from "../../assets/Collen.png"
import Cesforila from "../../assets/Cesforila.png"
const OurTeam = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Our Team</div>
        <div className={styles.twoBox}>
            <div className={styles.threeBox}>
                <div className={styles.cardCont}>
                    <div className={styles.image}>
                    <img src={Daniel} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Daniel Def</div>
                        <div className={styles.case}>301 cases</div>
                    </div>
                </div>
                <div className={styles.OraCardCont}>
                    <div className={styles.image}>
                    <img src={Sanfolle} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Sanfolle</div>
                        <div className={styles.case}>805 cases</div>
                    </div>
                </div>
                <div className={styles.cardCont}>
                    <div className={styles.image}>
                    <img src={Cesforila} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Cesforila</div>
                        <div className={styles.case}>407 cases</div>
                    </div>
                </div>
            </div>
            <div className={styles.threeBox}>
                <div className={styles.cardCont}>
                    <div className={styles.image}>
                    <img src={Collen} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Collen</div>
                        <div className={styles.case}>180 cases</div>
                    </div>
                </div>
                <div className={styles.cardCont}>
                    <div className={styles.image}>
                    <img src={Haldone} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Haldone</div>
                        <div className={styles.case}>212 cases</div>
                    </div>
                </div>
                <div className={styles.cardCont}>
                    <div className={styles.image}>
                    <img src={Nik} alt="" />
                    </div>
                    <div>
                        <div className={styles.name}>Nik Jeo</div>
                        <div className={styles.case}>350 cases</div>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default OurTeam
