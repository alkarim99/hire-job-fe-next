import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

import React from "react"

function Hire() {
  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div className="container py-4">
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
            </div>
            <div className="col py-5 px-md-5" id="profile">
              <h2 className="fw-bold">Hubungi Louis Tomlinson</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <form>
                <div className="mb-3">
                  <label for="tujuan" className="form-label text-muted">
                    Tujuan tentang pesan ini
                  </label>
                  <select class="form-select" id="tujuan">
                    <option value="project">Project</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="fullname" className="form-label text-muted">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Masukkan nama lengkap"
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
                  <label
                    for="telephone_number"
                    className="form-label text-muted"
                  >
                    No. Handphone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="telephone_number"
                    placeholder="Masukkan no. handphone"
                  />
                </div>
                <div class="mb-3">
                  <label for="deskripsi_singkat" class="form-label text-muted">
                    Deskripsi
                  </label>
                  <textarea
                    class="form-control"
                    id="deskripsi_singkat"
                    rows="3"
                  ></textarea>
                </div>
                <a href="#" className="d-grid btn btn-warning">
                  Hire
                </a>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Hire
