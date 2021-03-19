import { AppProps } from 'next/app'

import Layout from '@components/Layout'

import '@styles/app.scss'
import 'remixicon/fonts/remixicon.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
