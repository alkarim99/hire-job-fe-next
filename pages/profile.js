import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

function Profile() {
  const router = useRouter()

  React.useEffect(() => {
    if (localStorage.getItem("auth") == "False") {
      router.push("/login")
    }
  }, [])

  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div
          className="bg-primary position-absolute mb-4"
          style={{ height: "40vh", width: "100%", zIndex: "-99" }}
        ></div>
        <div className="container py-4" style={{ zIndex: "1" }}>
          <div className="row px-3 px-md-5 gap-5">
            <div className="col col-md-4 bg-white d-flex justify-content-center flex-column p-4 rounded-4">
              <img
                className="img-fluid w-50 align-self-center my-4"
                src="pp-louis-tomlinson.png"
                alt="pp-louis-tomlinson"
              />
              <h4 className="fw-bold">Louis Tomlinson</h4>
              <p>Web Developer</p>
              <p className="text-muted mb-2">
                <img src="map.png" alt="map" /> Indonesia
              </p>
              <p className="text-muted mb-2">Freelancer</p>
              <p className="text-muted mb-2">
                Senior Programmer dengan 3+ tahun pengalaman menggunakan
                JavaScript untuk mengembangkan, menguji dan mengamati aplikasi
                software perusahaan. Telah mendesain dan mengembangkan lebih
                dari 5 aplikasi untuk meningkatkan efisiensi dan data management
                untuk Tokopedia.
              </p>
              <Link href="/hire" className="btn btn-primary btn-lg my-4">
                Hire
              </Link>
              <div className="my-4">
                <h4 className="fw-bold">Skill</h4>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  JavaScript
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  ReactJS
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  ExpressJS
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  PHP
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  Laravel
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  HTML
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  CSS
                </Link>
              </div>
            </div>
            <div className="col" id="profile">
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <ul className="nav nav-underline mb-3">
                    <li className="nav-item">
                      <Link className="nav-link active fs-5" href="#">
                        Pengalaman Kerja
                      </Link>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col">
                      <img
                        src="tokopedia-logo.png"
                        alt="tokopedia-logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10">
                      <h4 className="mb-0 fw-semibold">Web Developer</h4>
                      <p className="fw-light m-0">Tokopedia</p>
                      <p className="text-muted">
                        January 2019 - January 2023 3 years
                      </p>
                      <p>
                        Berpengalaman menjadi web developer di Tokopedia untuk
                        membangun aplikasi website dari tokopedia.
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile
