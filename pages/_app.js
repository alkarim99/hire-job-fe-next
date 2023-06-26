import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import Head from "next/head"

import { store } from "@/store"
import { Provider } from "react-redux"
import Script from "next/script"
import { useSelector } from "react-redux"
import axios from "axios"

import "styles/scss/global.scss"
import "styles/scss/auth.scss"

function App({ Component, pageProps }) {
  // const state = useSelector((state) => state)
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    }
  )
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VS03QMTG6B"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VS03QMTG6B', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Head>
        <title>Hire Job App</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
export default App
