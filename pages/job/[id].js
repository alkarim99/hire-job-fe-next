import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Tagskill from "@/components/tagskill"
import Listexperience from "@/components/listexperience"
import { useRouter } from "next/router"
import React from "react"
import axios from "axios"

function Profile() {
  const router = useRouter()

  React.useEffect(() => {
    if (localStorage.getItem("auth") == "False") {
      router.push("/login")
    }
  }, [])

  const listExperience = [
    {
      position: "Web Developer",
      company: "Tokopedia",
      startdate: "January 2020",
      enddate: "January 2023",
      description:
        "Berpengalaman menjadi web developer di Tokopedia untuk membangun aplikasi website dari tokopedia.",
    },
  ]

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
                src="../pp-louis-tomlinson.png"
                alt="pp-louis-tomlinson"
              />
              <h4 className="fw-bold">Louis Tomlinson {router?.query?.id}</h4>
              <p>
                <img src="../suitcase.png" alt="suitcase" width={"17px"} /> Web
                Developer
              </p>
              <p className="mb-2">
                <img src="../map.png" alt="map" /> Indonesia
              </p>
              <p className="mb-2">
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
                <Tagskill skillName="JavaScript" />
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
                  {listExperience.map((item, index) => {
                    return <Listexperience experience={item} key={index} />
                  })}
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

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const {
    data: {
      data: { rows },
    },
  } = await axios.get("https://hire-job.onrender.com/v1/job")
  console.log(rows)
  //   const posts = await res.json()
  //   const users = [
  //     {
  //       id: "1",
  //       image: "pp-louis-tomlinson.png",
  //       fullname: "Louis Tomlinson",
  //       job: "Web Developer",
  //       location: "Indonesia",
  //       skills: ["PHP", "HTML", "JavaScript"],
  //     },
  //     {
  //       id: "2",
  //       image: "pp-harry-styles.png",
  //       fullname: "Harry Styles",
  //       job: "Mobile Developer",
  //       location: "Indonesia",
  //       skills: ["React Native", "Java", "PostgreSQL"],
  //     },
  //     {
  //       id: "3",
  //       image: "pp-niall-horan.png",
  //       fullname: "Niall Horan",
  //       job: "Full Stack Developer",
  //       location: "Indonesia",
  //       skills: ["ReactJS", "NextJS", "NodeJS"],
  //     },
  //   ]
  const users = [1, 2, 3]

  // Get the paths we want to pre-render based on posts
  const paths = rows.map((row) => ({
    params: { id: row.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //   const res = await fetch("https://.../posts")
  //   const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
    revalidate: 10,
  }
}

export default Profile
