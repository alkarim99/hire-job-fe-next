import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"

function Register() {
  const router = useRouter()
  const state = useSelector((state) => state)

  React.useEffect(() => {
    if (Object.keys(state.authSlice.userData).length != 0) {
      router.push("/profile")
    }
  }, [])

  const [fullname, setFullname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [job_title, setJobTitle] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [passwordConfirm, setPasswordConfirm] = React.useState("")

  const handleRegiter = () => {
    if (password == passwordConfirm) {
      axios
        .post(`https://hire-job.onrender.com/v1/auth/register`, {
          email,
          password,
          fullname,
          company,
          job_title,
          phone,
        })
        .then(() => {
          Swal.fire({
            title: "Registration Success!",
            text: "Registration Success! Please Login",
            icon: "success",
          }).then(() => {
            // navigate("/login")
            router.push("/login")
          })
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text:
              error?.response?.data?.message ?? "Something wrong in our App!",
            icon: "error",
          })
        })
    } else {
      Swal.fire({
        title: "Error!",
        text: "Password and Confirm Password is different!",
        icon: "error",
      })
    }
  }

  return (
    <>
      <div className="container">
        <div className="row py-3 flex-column flex-md-row vh-100 justify-content-center align-items-center gap-md-5 gap-3">
          <div className="col col-md-5 left-col d-none d-md-block">
            <Link href="/">
              <img className="img-fluid w-25" src="logo-2.png" alt="logo-2" />
            </Link>
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
                <label for="fullname" className="form-label text-muted">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Masukkan nama panjang"
                  onChange={(e) => setFullname(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="company" className="form-label text-muted">
                  Perusahaan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Masukkan perusahaan"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="jobTitle" className="form-label text-muted">
                  Pekerjaan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  placeholder="Masukkan pekerjaan"
                  onChange={(e) => setJobTitle(e.target.value)}
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
              <div className="mb-3">
                <label for="password_confirm" className="form-label text-muted">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirm"
                  placeholder="Masukkan konfirmasi kata sandi"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={handleRegiter}
                >
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
