import React from 'react'
import styles from './Partner.module.css';
import logo4 from '/src/assets/images/logo4.png';
import Image from 'next/image';

const Partner = () => {
  return (
    <div>
        <div className={styles.partner}>
            <h2 className={styles.title}>Companies we’ve helped build:</h2>
            <div className={styles.logos}>
            <Image src={logo4} alt="partner" className={styles.partnerImage} width={80} height={80} />
            <Image src={logo4} alt="partner" className={styles.partnerImage} width={80} height={80} />
            <Image src={logo4} alt="partner" className={styles.partnerImage} width={80} height={80} />
            <Image src={logo4} alt="partner" className={styles.partnerImage} width={80} height={80} />
            </div>
        </div>
    </div>
  )
}

export default Partner