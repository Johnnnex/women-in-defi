import React from "react";
import Head from "next/head";

const HeadComp = ({ title }) => {
  return (
    <Head>
      <title>{title || "Women in DeFi - Empowering Women Globally"}</title>

      {/* Viewport and Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth."
      />
      <meta
        name="keywords"
        content="women in tech, women in defi, defi, decentralized finance, women in blockchain, DeFi communities, Web3, women in crypto, DeFi for women, blockchain for women, Africa DeFi, Nigeria Web3, women empowerment, decentralized finance education, female blockchain leaders, women-led crypto projects, crypto literacy for women, blockchain technology for women, women in fintech, female crypto advocates, gender equality in blockchain, inclusive finance, women in investment, DeFi training programs, decentralized applications for women, women entrepreneurs in crypto, women in digital assets, women in technology leadership, DeFi networking, women in financial technology, crypto communities for women, women in emerging tech, blockchain mentoring for women, female investors in crypto, women in digital currencies, gender diversity in fintech, women in cryptocurrency education, women supporting women in crypto"
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@womenindefi" />
      <meta
        name="twitter:title"
        content="Women In DeFi - Empowering Women Globally"
      />
      <meta
        name="twitter:description"
        content="Join Women in DeFi and discover how decentralized finance is transforming the financial world for women globally."
      />
      <meta
        name="twitter:image"
        content="https://womenindefi.org/images/seo-img.jpg"
      />

      {/* Open Graph Meta Tags for Social Sharing */}
      <meta
        property="og:title"
        content="Women In DeFi - Empowering Women Globally"
      />
      <meta property="og:url" content="https://womenindefi.org" />
      <meta
        property="og:image"
        content="https://womenindefi.org/images/seo-img.jpg"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth."
      />
      <meta property="og:site_name" content="Women in DeFi" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://womenindefi.org" />

      {/* Favicon */}
      <link rel="icon" href="/wid.ico" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Women in DeFi",
          url: "https://womenindefi.org",
          logo: "https://womenindefi.org/images/seo-img.jpg",
          sameAs: [
            "https://twitter.com/womenindefi",
            "https://linkedin.com/company/womenindefi",
            "https://facebook.com/womenindefi",
          ],
          description:
            "Women in DeFi is dedicated to empowering women globally through decentralized finance education, advocacy, and community growth.",
        })}
      </script>
    </Head>
  );
};

export default HeadComp;
