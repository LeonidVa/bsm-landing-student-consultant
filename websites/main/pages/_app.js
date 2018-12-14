import React from "react";
import Router from 'next/router';
import App, { Container } from "next/app";
import { Provider } from 'react-redux'
import withGA from "next-ga";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '@store';
import stat from 'utils/analytics';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      stat.triggerTarget.pageView(url);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
  
    return (
      <Container>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
            <React.Fragment>
              <Component {...pageProps} />
            </React.Fragment>
          {/* </PersistGate> */}
        </Provider>
      </Container>
    );
  }
}

export default withGA('UA-119183335-1', Router)(MyApp);