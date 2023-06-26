import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import Swal from "sweetalert2"

import { addAuth } from "@/store/reducers/authSlice"
import Tagskill from "@/components/tagskill"

function Editprofile() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [userData, setUserData] = React.useState("")

  React.useEffect(() => {
    if (Object.keys(state?.authSlice?.userData).length == 0) {
      router.push("/login")
    } else {
      setUserData(state?.authSlice?.userData)
    }
  }, [])

  const [fullname, setFullname] = React.useState(userData?.fullname)
  const [phone, setPhone] = React.useState(userData?.phone)
  const [company, setCompany] = React.useState(userData?.company)
  const [job_title, setJobTitle] = React.useState(userData?.job_title)
  const [domicile, setDomicile] = React.useState(userData?.domicile)
  const [description, setDescription] = React.useState(userData?.description)

  const handleUpdateProfile = () => {
    const payload = {
      fullname: fullname ?? userData?.fullname,
      company: company ?? userData?.company,
      job_title: job_title ?? userData?.job_title,
      phone: phone ?? userData?.phone,
      description: description ?? userData?.description,
      domicile: domicile ?? userData?.domicile,
    }
    axios
      .patch("https://hire-job.onrender.com/v1/profile", payload)
      .then(() => {
        Swal.fire({
          title: "Edit Profile Success!",
          text: "Edit Profile Success!",
          icon: "success",
        })
        axios
          .get("https://hire-job.onrender.com/v1/profile")
          .then((response) => {
            dispatch(addAuth(response?.data?.data))
          })
      })
      .catch((error) => {
        let text = "Something wrong in our App!"
        const errors = error?.response?.data?.messages
        if (Object.keys(errors).length != 0) {
          text = ""
          for (const key in errors) {
            text += `${key}: ${errors[key].message} \n`
          }
        }
        Swal.fire({
          title: "Error!",
          text: text,
          icon: "error",
        })
      })
  }

  const [skill, setSkill] = React.useState("")

  const handleUpdateSkill = () => {
    const skills = new Array(skill)
    axios
      .post("https://hire-job.onrender.com/v1/skills", {
        skills,
      })
      .then(() => {
        Swal.fire({
          title: "Add Skills Success!",
          text: "Add Skills Success!",
          icon: "success",
        })
        axios
          .get("https://hire-job.onrender.com/v1/profile")
          .then((response) => {
            dispatch(addAuth(response?.data?.data))
          })
      })
  }

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
                  <h4 className="fw-bold">{userData?.fullname}</h4>
                  <p>
                    <img src="suitcase.png" alt="suitcase" width={"17px"} />{" "}
                    {userData?.job_title}
                  </p>
                  <p className="text-muted mb-2">
                    <img src="map.png" alt="map" />{" "}
                    {userData?.domicile != "-" ? (
                      userData?.domicile
                    ) : (
                      <span className="text-danger fw-bold">
                        {" "}
                        Edit Profile untuk Menambahkan Domisili
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <button
                  className="btn btn-primary"
                  onClick={handleUpdateProfile}
                >
                  Simpan
                </button>
              </div>
              <div className="row mb-3">
                <Link href="/profile" className="btn btn-light">
                  Kembali
                </Link>
              </div>
            </div>
            <div className="col" id="profile">
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <h4>Data diri</h4>
                  <hr />
                  <form
                    onSubmit={(e) => {
                      e.preventDefault
                    }}
                  >
                    <div className="mb-3">
                      <label for="fullname" className="form-label text-muted">
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        placeholder="Fullname"
                        defaultValue={userData?.fullname}
                        onChange={(e) => {
                          setFullname(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="phone" className="form-label text-muted">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        Value={userData?.phone}
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="job_title" className="form-label text-muted">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="job_title"
                        placeholder="Masukkan job title"
                        Value={userData?.job_title}
                        onChange={(e) => {
                          setJobTitle(e.target.value)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="domicile" className="form-label text-muted">
                        Domicile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="domicile"
                        placeholder="Domicile"
                        Value={userData?.domicile}
                        onChange={(e) => {
                          setDomicile(e.target.value)
                        }}
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
                        Value={userData?.company}
                        onChange={(e) => {
                          setCompany(e.target.value)
                        }}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label text-muted">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        class="form-control"
                        id="description"
                        rows="3"
                        defaultValue={userData?.description}
                        onChange={(e) => {
                          setDescription(e.target.value)
                        }}
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col bg-white rounded-4 py-5 px-md-5">
                  <h4>Skill</h4>
                  <hr />
                  {userData?.skills?.length != 0 ? (
                    userData?.skills?.map((skill, index) => {
                      return <Tagskill skillName={skill} key={index} />
                    })
                  ) : (
                    <div class="alert alert-warning" role="alert">
                      Tambah Skill Di Sini
                    </div>
                  )}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <div className="row d-flex flex-column flex-md-row gap-2 mt-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="skill"
                          placeholder="Skill"
                          onChange={(e) => {
                            setSkill(e.target.value)
                          }}
                        />
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-warning"
                          onClick={handleUpdateSkill}
                        >
                          Simpan
                        </button>
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
