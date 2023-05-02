import '../styles/custom-styles.css'
import '../styles/dracula.css'
import '../styles/prose-styles.css'

import * as React from 'react'
import { useRouter } from 'next/router'
import { Nav } from '../components/Nav'
import { Providers } from '../components/Providers'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/build' && <Nav />}
      <Providers />
      <Component {...pageProps} />
    </>
  )
}
