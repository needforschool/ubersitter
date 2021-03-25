import { AppProps } from 'next/app'
import React from 'react'
import axios from 'axios'
import AsyncLocalStorage from '@createnextapp/async-local-storage'

import Layout from '@components/Layout'
import Loading from '@screens/Loading'

import { endpoint } from '@services/mvc'

import '@styles/app.scss'
import 'remixicon/fonts/remixicon.css'
import 'mapbox-gl/dist/mapbox-gl.css'


const App = ({ Component, pageProps }: AppProps) => {


  const [session, setSession] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(() => {

    const initSession = async () => {
      const storedSession = await getStoredSession();
      if (storedSession) {
        let formData = new FormData();
        formData.append('email', storedSession.email)
        formData.append('token', storedSession.token)
        axios.post(`${endpoint}auth/session`, formData)
          .then(res => {
            console.log(res.data)
            setSession(res.data);
          })
          .catch(error => {
            //TODO: error message
          }).finally(() => {
            setIsLoading(false)
          });
      } else {
        setIsLoading(false)
      }
    }

    const getStoredSession = async () => {
      const result = await AsyncLocalStorage.getItem('us_session');
      return JSON.parse(result)
    }

    initSession();

  }, [JSON])

  if (isLoading) return <Loading />

  return (
    <Layout>
      <Component {...pageProps} session={session} />
    </Layout>
  )
}

export default App
