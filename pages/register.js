import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

function Register() {
  const router = useRouter()

  React.useEffect(() => {
    if (localStorage.getItem("auth") == "True") {
      router.push("/profile")
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="row flex-column flex-md-row vh-100 justify-content-center align-items-center gap-md-5 gap-3">
          <div className="col col-md-5 left-col d-none d-md-block">
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
                <label for="fullname" className="form-label text-muted">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Masukkan nama panjang"
                />
              </div>
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
                <label for="telephone_number" className="form-label text-muted">
                  No. Handphone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="telephone_number"
                  placeholder="Masukkan no. handphone"
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
              <div className="mb-3">
                <label for="password_confirm" className="form-label text-muted">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirm"
                  placeholder="Masukkan konfirmasi kata sandi"
                />
              </div>
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-warning">
                  Daftar
                </button>
              </div>
            </form>
            <p className="text-center">
              Anda sudah punya akun?{" "}
              <Link
                className="text-decoration-none text-black fw-semibold"
                href="/login"
              >
                Masuk Di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
