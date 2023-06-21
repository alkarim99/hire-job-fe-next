import React from "react"
import Link from "next/link"

function Navbar() {
  const [auth, setAuth] = React.useState("")

  React.useEffect(() => {
    setAuth(localStorage.getItem("auth"))
  })

  return (
    <nav className="navbar navbar-expand-lg bg-white py-4">
      <div className="container container-fluid align-item-center px-3">
        <Link className="navbar-brand text-primary fw-bolder m-0" href="./">
          <img src="logo.png" className="img-fluid w-75 m-0 p-0" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex gap-2 flex-column flex-lg-row mt-4 mt-lg-0">
            {auth == "True" ? (
              <>
                <Link className="btn btn-transparent" key={1} href="#">
                  <img src="bell.png" />
                </Link>
                <Link className="btn btn-transparent" href="#">
                  <img src="mail.png" />
                </Link>
                <Link className="btn btn-transparent" href="/profile">
                  <img src="user-icon.png" />
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-primary fw-bold" href="/login">
                  Login
                </Link>
                <Link className="btn btn-primary fw-bold" href="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
