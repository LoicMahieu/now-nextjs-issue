import App from "next/app";
import React from "react";
import {withApollo} from "../lib/withApollo";

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
          <Component {...pageProps} />
      </>
    );
  }
}

export default withApollo(MyApp);
