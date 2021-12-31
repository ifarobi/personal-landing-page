import type { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="I am a Software Engineer, interested to hire me?"
        />
        <meta name="twitter:site" content="@IFarobi" />
        <meta property="og:url" content="https://farobi.id" />
        <meta property="og:title" content="Hi! - Ilham Farobi" />
        <meta
          property="og:description"
          content="I am a Software Engineer, interested to working together?"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
