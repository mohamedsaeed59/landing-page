import React from 'react';
import Image from 'next/image';
import styles from './Main.module.css';
import backgroundImage from '/src/assets/images/background1.jpeg';
import { CiSearch } from "react-icons/ci";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.leftContent}>
        <Image src={backgroundImage} alt="Digital Marketer" className={styles.heroImage} width={500} height={400} />
      </div>
      <div className={styles.rightContent}>
        <h1 className={styles.title}>
          We Help You Build & Grow an Online Business
        </h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Tell us what you need to build..." />
          <button className={styles.searchBtn}>
            <CiSearch className={styles.iconSearch} />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Main