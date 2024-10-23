import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Partner from '@/components/partner/Partner';
import ProductShowcase from '@/components/productShowcase/ProductShowcase';
import StoreCard from '@/components/storeCard/StoreCard';
import Revenue from '@/components/revenue/Revenue';
import WriteUs from '@/components/writeUs/WriteUs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Partner />
      <ProductShowcase />
      <StoreCard />
      <Revenue />
      <WriteUs />
    </div>
  );
}
