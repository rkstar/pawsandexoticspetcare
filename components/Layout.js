import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const defaultTitle = 'Paws & Exotics Pet Care';
export default ({ title = defaultTitle, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
