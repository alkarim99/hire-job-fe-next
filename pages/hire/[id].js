import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import axios from "axios"
import Swal from "sweetalert2"

import Tagskill from "@/components/tagskill"

function Hire({ data }) {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [profile, setProfile] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [isLoading, SetIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (state?.authSlice?.token == "") {
      router.push("/login")
    } else {
      setProfile(data)
    }
  }, [])

  const handleContact = () => {
    SetIsLoading(true)
    axios
      .post(`https://hire-job.onrender.com/v1/contact/${profile?.id}`, {
        subject,
        description,
      })
      .then(() => {
        Swal.fire({
          title: "Contact Success!",
          text: "Contact Success!",
          icon: "success",
        })
        router.push(`/job/${profile?.id}`)
      })
      .catch((error) => {
        let text = "Kesalahan Pada Aplikasi Kami!"
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
      .finally(() => {
        SetIsLoading(false)
      })
  }

  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div className="container py-4">
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
            <div className="col py-5 px-md-5" id="profile">
              <h2 className="fw-bold">Hubungi {profile?.fullname}</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="mb-3">
                  <label for="subject" className="form-label text-muted">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subjek"
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label text-muted">
                    Deskripsi
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    placeholder="Deskripsi"
                    onChange={(e) => {
                      setDescription(e.target.value)
                    }}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-warning" onClick={handleContact}>
                    {isLoading ? "Loading..." : "Rekrut"}
                  </button>
                </div>
              </form>
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
  }
}

export default Hire
