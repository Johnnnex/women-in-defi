import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Empowering Women Globally Through Decentralized Finance" />
        <meta name="keyword" content="women in tech, women in defi, defi" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="womenindefi.org" />
        <meta name="twitter:title" content="Women In DeFi" />
        <meta name="twitter:description" content="Empowering Women Globally Through Decentralized Finance" />
        <meta name="twitter:image" content="https://womenindefi.org/images/seo-img.jpg" />
        <meta property="og:title" content="Women in DeFi" />
        <meta property="og:url" content="https://womenindefi.org" />
        <meta property="og:image" content="https://womenindefi.org/images/seo-img.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Empowering Women Globally Through Decentralized Finance" />
        <meta property="og:site_name" content="Women in DeFi" />
        <link rel="icon" href="/wid.ico" />
    </Head>
  )
}

export default HeadComp
