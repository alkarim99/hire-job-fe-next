import React from "react"
import { useRouter } from "next/router"

function Logout() {
  const router = useRouter()

  React.useEffect(() => {
    localStorage.clear()

    router.replace("/login")
  }, [])

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Logout
