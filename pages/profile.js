import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

import React from "react"

function Profile() {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </p>
              <a href="#" className="btn btn-primary btn-lg my-4">
                Hire
              </a>
              <div className="my-4">
                <h4 className="fw-bold">Skill</h4>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  Phyton
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
                  Golang
                </Link>
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
                  PHP
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
                  C++
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  Kotlin
                </Link>
                <Link
                  className="btn btn-outline-warning text-white me-2 fw-semibold mb-2"
                  href="#"
                  style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                >
                  Swift
                </Link>
              </div>
              <p className="text-muted mb-3">
                <img src="mail.png" alt="mail" className="me-3" />{" "}
                Louistommo@gmail.com
              </p>
              <p className="text-muted mb-3">
                <img src="instagram.png" alt="instagram" className="me-3" />{" "}
                @Louist91
              </p>
              <p className="text-muted mb-3">
                <img src="github.png" alt="github" className="me-3" />{" "}
                @Louistommo
              </p>
              <p className="text-muted mb-3">
                <img src="gitlab.png" alt="gitlab" className="me-3" />{" "}
                @Louistommo91
              </p>
            </div>
            <div className="col bg-white rounded-4 p-5" id="profile">
              <ul className="nav nav-underline mb-3">
                <li className="nav-item">
                  <a className="nav-link active fs-5" href="#">
                    Pengalaman Kerja
                  </a>
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
                  <h4 className="mb-0 fw-semibold">Engineer</h4>
                  <p className="fw-light m-0">Tokopedia</p>
                  <p className="text-muted">
                    July 2019 - January 2020 6 months
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
              <hr />
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
                    July 2019 - January 2020 6 months
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
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
