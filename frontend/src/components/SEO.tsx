import React from 'react'

import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { Config } from '@utils/Configs'

interface ISEOProps {
  title?: string
  description?: string
  url?: string
  keywords?: string
}

const SEO = ({ title, description, url, keywords }: ISEOProps) => {
  return (
    <>
      <Head>
        <meta charSet={Config.locale} key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
          key="viewport"
        />

        <meta name="keywords" content={keywords || Config.keywords} />
      </Head>
      <NextSeo
        title={title || Config.defaultTitle}
        description={description || Config.description}
        canonical={Config.canonical}
        openGraph={{
          title: title || Config.defaultTitle,
          description: description || Config.description,
          url: `${Config.canonical}/${url}`,
          locale: Config.locale,
          site_name: Config.defaultTitle
        }}
        twitter={{
          handle: '@jezmael',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
    </>
  )
}

export { SEO }
