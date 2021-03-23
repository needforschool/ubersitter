import { AppProps } from 'next/app'

import Layout from '@components/Layout'
import { useSession } from '@hooks/useSession'
import Loading from '@screens/Loading'

import '@styles/app.scss'
import 'remixicon/fonts/remixicon.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const App = ({ Component, pageProps }: AppProps) => {

  const session = useSession();
  if (session.isLoading) return <Loading />

  return (
    <Layout>
      <Component {...pageProps} session={session.user} />
    </Layout>
  )
}

export default App
