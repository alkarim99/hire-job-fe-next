import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import React from "react"
import { useRouter } from "next/router"

function Editprofile() {
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
            <div className="col col-md-4">
              <div className="row mb-3">
                <div className="col bg-white d-flex justify-content-center align-items-center align-items-md-start flex-column p-4 rounded-4">
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
                </div>
              </div>
              <div className="row mb-3">
                <a href="#" className="btn btn-primary">
                  Simpan
                </a>
              </div>
              <div className="row mb-3">
                <a href="#" className="btn btn-light">
                  Batal
                </a>
              </div>
            </div>
            <div className="col" id="profile">
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <h4>Data diri</h4>
                  <hr />
                  <form>
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
                      <label for="job_desk" className="form-label text-muted">
                        Job desk
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="job_desk"
                        placeholder="Masukkan job desk"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="domisili" className="form-label text-muted">
                        Domisili
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="domisili"
                        placeholder="Masukkan domisili"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="tempat_kerja"
                        className="form-label text-muted"
                      >
                        Tempat Kerja
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tempat_kerja"
                        placeholder="Masukkan tempat kerja"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="deskripsi_singkat"
                        class="form-label text-muted"
                      >
                        Deskripsi Singkat
                      </label>
                      <textarea
                        class="form-control"
                        id="deskripsi_singkat"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <h4>Skill</h4>
                  <hr />
                  <form>
                    <div className="row d-flex flex-column flex-md-row gap-2">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="skill"
                          placeholder="Skill"
                        />
                      </div>
                      <div className="col-2">
                        <a href="#" className="btn btn-warning">
                          Simpan
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <h4>Pengalaman Kerja</h4>
                  <hr />
                  <form>
                    <div className="mb-3 ">
                      <label for="posisi" class="form-label text-muted">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="posisi"
                        placeholder="Posisi"
                      />
                    </div>
                    <div className="row mb-3 ">
                      <div className="col">
                        <label
                          for="nama_perusahaan"
                          class="form-label text-muted"
                        >
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nama_perusahaan"
                          placeholder="Nama Perusahaan"
                        />
                      </div>
                      <div className="col">
                        <label for="bulan_tahun" class="form-label text-muted">
                          Bulan / Tahun
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="bulan_tahun"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label
                        for="deskripsi_singkat"
                        class="form-label text-muted"
                      >
                        Deskripsi Singkat
                      </label>
                      <textarea
                        class="form-control"
                        id="deskripsi_singkat"
                        rows="3"
                      ></textarea>
                    </div>
                    <hr />
                    <a href="#" className="d-grid btn btn-outline-warning">
                      Tambah Pengalaman Kerja
                    </a>
                  </form>
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

export default Editprofile
