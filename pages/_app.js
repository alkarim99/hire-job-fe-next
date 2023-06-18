import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import Head from "next/head"
import "styles/scss/global.scss"
// import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return (
    <>
      <Head>
        <title>Hire Job App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
