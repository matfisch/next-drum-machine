import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, ...other } = this.props;
    return (
      <Container>
        <Head>
          <title>Next-drum-machine</title>
        </Head>
        <Component {...pageProps} {...other} />
      </Container>
    );
  }
}

export default NextApp;
