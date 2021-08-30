import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="robots" content="index" />
          <meta name="theme-color" content="#1dac99" />
          <meta name="msapplication-TileColor" content="#1dac99" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="author" content="Jezmael Basilio @jezmaelb" />
          <link
            rel="icon"
            href="/favicon.ico"
            key="favicon"
            type="image/x-icon"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
