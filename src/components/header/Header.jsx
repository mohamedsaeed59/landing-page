import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.getStartedBtn} href='#'>Get Started Now</a>
      <button className={styles.loginBtn}>Login</button>
    </header>
  );
}

export default Header;
