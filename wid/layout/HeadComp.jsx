import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        {/* <meta name="description" content="John's version of 'SIGFLOW'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="sigflow-johnex.vercel.app" />
        <meta name="twitter:title" content="John's Submission . Sigflow" />
        <meta name="twitter:description" content="John's version of 'SIGFLOW'" />
        <meta name="twitter:image" content="https://sigflow-johnex.vercel.app/images/open-graph-img.jpeg" />
        <meta property="og:title" content="John's Submission . Sigflow" />
        <meta property="og:url" content="https://sigflow-johnex.vercel.app" />
        <meta property="og:image" content="https://sigflow-johnex.vercel.app/images/open-graph-img.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="John's version of 'SIGFLOW'" />
        <meta property="og:site_name" content="John's Submission . Sigflow" /> */}
        <link rel="icon" href="/john.ico" />
    </Head>
  )
}

export default HeadComp
