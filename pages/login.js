import React from "react"
import Link from "next/link"
import Swal from "sweetalert2"
import axios from "axios"

import { useSelector } from "react-redux"
import { useRouter } from "next/router"

function Login() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  React.useEffect(() => {
    if (localStorage.getItem("auth") == "True") {
      router.push("/profile")
    }
  })

  const handleLogin = () => {
    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email,
        password,
      })
      .then(() => {
        Swal.fire({
          title: "Login Success!",
          text: "Login Success! Redirect to App...",
          icon: "success",
        })
        localStorage.setItem("auth", "True")
        router.push("/profile")
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error?.message ?? "Something wrong in our App!",
          icon: "error",
        })
      })
  }

  return (
    <>
      <div className="container">
        <div className="row flex-column flex-md-row vh-100 justify-content-center align-items-center gap-md-5 gap-3">
          <div className="col col-md-5 left-col">
            <img className="img-fluid w-25" src="logo-2.png" alt="logo-2" />
            <h1
              className="fs-1"
              style={{ position: "relative", top: "20%", width: "93%" }}
            >
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col col-md-5 d-flex flex-column justify-content-center">
            <h3 className="text-center text-md-start fw-bold">
              Halo, Pewpoeple
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label for="email" className="form-label text-muted">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan alamat email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label text-muted">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukkan kata sandi"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-end">
                <Link
                  className="text-decoration-none text-black fw-semibold"
                  href="#"
                >
                  Lupa kata sandi?
                </Link>
              </p>
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={handleLogin}
                >
                  Masuk
                </button>
              </div>
            </form>
            {/* <div className="d-grid mb-3">
              <button className="btn btn-warning">
                Counter : {state.counterSlice.value}
              </button>
            </div> */}
            <p className="text-center">
              Anda belum punya akun?{" "}
              <Link
                className="text-decoration-none text-black fw-semibold"
                href="/register"
              >
                Daftar Di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
