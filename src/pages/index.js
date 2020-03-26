import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from '../styles/Home.module.scss';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.content}>
      <h1>Tameto Gatsby</h1>
    </div>
  </Layout>
);

export default Home;
