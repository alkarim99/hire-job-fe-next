import React from "react"
import Link from "next/link"

function Login() {
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
            <form>
              <div className="mb-3">
                <label for="email" className="form-label text-muted">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan alamat email"
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
                <button type="submit" className="btn btn-warning">
                  Masuk
                </button>
              </div>
            </form>
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
