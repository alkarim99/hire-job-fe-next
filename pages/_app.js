import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import Head from "next/head"

import Script from "next/script"

import { Provider, useSelector } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { store, persistor } from "@/store"

import axios from "axios"

import "styles/scss/global.scss"
import "styles/scss/auth.scss"

function App({ Component, pageProps }) {
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
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RunApp pageProps={pageProps} Component={Component} />
        </Provider>
      </PersistGate>
    </>
  )
}

function RunApp({ Component, pageProps }) {
  const state = useSelector((state) => state)
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
    console.log(state?.authSlice?.token)
    axios.interceptors.request.use(
      (config) => {
        if (state?.authSlice?.token != null) {
          config.headers["Authorization"] = `Bearer ${state?.authSlice?.token}`
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }, [])

  return <Component {...pageProps} />
}

export default App
