import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import Tagskill from "@/components/tagskill"
import Listexperience from "@/components/listexperience"
import axios from "axios"

function Profile({ data }) {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [profile, setProfile] = React.useState([])

  React.useEffect(() => {
    if (state?.authSlice?.token == "") {
      router.push("/login")
    } else {
      setProfile(data)
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
                className="img-fluid w-50 align-self-center my-4 rounded-circle"
                src={profile?.photo}
                alt="pp"
              />
              <h4 className="fw-bold">{profile?.fullname}</h4>
              <p>
                <img src="../suitcase.png" alt="suitcase" width={"17px"} />{" "}
                {profile?.job_title}
              </p>
              <p className="mb-2">
                <img src="../map.png" alt="map" />{" "}
                {profile?.domicile != "-" ? (
                  profile?.domicile
                ) : (
                  <span className="text-danger fw-bold">
                    Belum Ada Domisili
                  </span>
                )}
              </p>
              <p className="mb-2">
                {profile?.description != "-" ? (
                  profile?.description
                ) : (
                  <div class="alert alert-warning" role="alert">
                    Belum Ada Deskripsi
                  </div>
                )}
              </p>
              <Link
                href={`/hire/${router?.query?.id}`}
                className="btn btn-primary btn-lg my-4"
              >
                Rekrut
              </Link>
              <div className="my-4">
                <h4 className="fw-bold">Skill</h4>
                {profile?.skills?.length != 0 ? (
                  profile?.skills?.map((skill, index) => {
                    return (
                      <Tagskill skillName={skill} key={index} index={index} />
                    )
                  })
                ) : (
                  <div class="alert alert-warning" role="alert">
                    Belum Ada Skill
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
                  {profile?.job_history?.length != 0 ? (
                    profile?.job_history?.map((item, index) => {
                      return (
                        <>
                          <Listexperience
                            userId={profile?.id}
                            experience={item}
                            key={index}
                          />
                          <hr />
                        </>
                      )
                    })
                  ) : (
                    <div class="alert alert-warning" role="alert">
                      Belum Ada Pengalaman Kerja
                    </div>
                  )}
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const {
    data: { data },
  } = await axios.get("https://hire-job.onrender.com/v1/job/all")

  // Get the paths we want to pre-render based on posts
  const paths = data.map((row) => ({
    params: { id: row.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  const {
    data: { data },
  } = await axios.get(
    `https://hire-job.onrender.com/v1/job/detail/${params.id}`
  )
  // const jobDetail = data.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

export default Profile
