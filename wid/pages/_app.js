import { Poppins } from 'next/font/google'
import Layout from '@/layout/Layout'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-Poppins'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${poppins.variable} font-poppins`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
