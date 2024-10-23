import React from 'react';
import styles from './ProductShowcase.module.css';
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ProductShowcase = () => {
  return (
    <section className={styles.productShowcase}>
      <div className={styles.showcaseInfo}>
        <h3>We Help You</h3>
        <h1>Sell Stunning Products</h1>
        <p>We'll guide you through our unique 5-step brand-building framework</p>
        <button className={styles.detailsBtn}>
          More Details
          <span className={styles.iconWrapper}>
            <FaChevronRight />
          </span>
        </button>
      </div>
      <div className={styles.productList}>
        {/* First Product */}
       <div className={styles.product1}>
       <div className={styles.circle1} style={{ backgroundColor: '#FFD97D' }}></div>
        <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Image
                src="/images/chair2.webp"
                alt="Minimal Chair"
                className={styles.productImage}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.productDetails}>
              <p className={styles.productName}>Minimal Chair</p>
              <div className={styles.productFooter}>
                <p className={styles.productPrice}>$204.00</p>
                <FaShoppingCart className={styles.addToCart} />
              </div>
            </div>
          </div>
       </div>

        {/* Second Product */}
       <div className={styles.product1}>
       <div className={styles.circle2} style={{ backgroundColor: '#9B89FF' }}></div>
       <div className={styles.productCard}>
          <div className={styles.productImageWrapper}>
            <Image
              src="/images/chair.avif"
              alt="Beats Headphone"
              className={styles.productImage}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.productDetails}>
            <p className={styles.productName}>Beats Headphone</p>
            <div className={styles.productFooter}>
                <p className={styles.productPrice}>$74.00</p>
                <FaShoppingCart className={styles.addToCart} />
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
