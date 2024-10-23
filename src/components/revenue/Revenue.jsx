import React from 'react';
import styles from './Revenue.module.css';
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import { IoMdArrowDropupCircle } from "react-icons/io";

const Revenue = () => {
  return (
    <div className={styles.revenue}>
      <div className={styles.revenueCards}>
        <div className={styles.revenueCard}>
          <div className={styles.circleBackground1} style={{ backgroundColor: '#37b6e7' }}></div>
          <div className={styles.cardContent}>
            <Image src="/images/fashion.webp" alt="User" className={styles.avatar} width={55} height={55} />
            <div>
              <h2 className={styles.revenueCardTitle}>
                <span>$7,654</span>
                <IoMdArrowDropupCircle className={styles.revenueTitle} />
              </h2>
              <p className={styles.revenueText}>TOTAL REVENUE <span className={styles.positive}>+ $232</span></p>
            </div>
          </div>
        </div>
        <div className={styles.revenueCard}>
          <div className={styles.circleBackground2} style={{ backgroundColor: '#2fc274' }}></div>
          <div className={styles.cardContent}>
            <div>
              <h2 className={styles.revenueCardTitle}>
                <span>$9,654</span>
                <IoMdArrowDropupCircle className={styles.revenueTitle} />
              </h2>
              <p className={styles.revenueText}>TOTAL REVENUE <span className={styles.positive}>+ $349</span></p>
            </div>
            <Image src="/images/fashion.webp" alt="User" className={styles.avatar} width={55} height={55} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>WHAT WE DO</h3>
        <h1 className={styles.title}>Increase our Customers Sales</h1>
        <p className={styles.paragraph}>Our customers are seeing big results within the first three months</p>
         <button className={styles.detailsBtn}>
          More Details
          <span className={styles.iconWrapper}>
            <FaChevronRight />
          </span>
        </button> 
      </div>
    </div>
  );
};

export default Revenue;
