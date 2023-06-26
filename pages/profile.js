import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Tagskill from "@/components/tagskill"
import Listexperience from "@/components/listexperience"
import { useRouter } from "next/router"
import React from "react"
import { useSelector } from "react-redux"

function Profile() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [userData, setUserData] = React.useState("")

  React.useEffect(() => {
    if (Object.keys(state?.authSlice?.userData).length == 0) {
      router.push("/login")
    } else {
      setUserData(state?.authSlice?.userData)
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
              <h4 className="fw-bold">{userData?.fullname}</h4>
              <p>
                <img src="suitcase.png" alt="suitcase" width={"17px"} />{" "}
                {userData?.job_title}
              </p>
              <p className="mb-2">
                <img src="map.png" alt="map" />{" "}
                {userData?.domicile != "-" ? (
                  userData?.domicile
                ) : (
                  <span className="text-danger fw-bold">
                    Edit Profile untuk Menambahkan Domisili
                  </span>
                )}
              </p>
              <p className="mb-2">
                {userData?.description != "-" ? (
                  userData?.description
                ) : (
                  <div class="alert alert-warning" role="alert">
                    Edit Profile untuk Menambahkan Deskripsi
                  </div>
                )}
              </p>
              <Link href="/editprofile" className="btn btn-primary btn-lg my-4">
                Edit Profile
              </Link>
              <div className="my-4">
                <h4 className="fw-bold">Skill</h4>
                {userData?.skills?.length != 0 ? (
                  userData?.skills?.map((skill, index) => {
                    return <Tagskill skillName={skill} key={index} />
                  })
                ) : (
                  <div class="alert alert-warning" role="alert">
                    Edit Profile untuk Menambahkan Skill
                  </div>
                )}
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
                  {userData?.job_history?.length != 0 ? (
                    userData?.job_history?.map((item, index) => {
                      return <Listexperience experience={item} key={index} />
                    })
                  ) : (
                    <div class="alert alert-warning" role="alert">
                      Edit Profile untuk Menambahkan Pengalaman Kerja
                    </div>
                  )}
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
