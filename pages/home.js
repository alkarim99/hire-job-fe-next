import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import axios from "axios"
import Link from "next/link"

import Listjob from "@/components/listjob"
import ButtonPagination from "@/components/buttonPagination"
import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { getCookie } from "cookies-next"

export default function Home(props) {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [userData, setUserData] = React.useState("")
  let pages = []
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalPage, setTotalPage] = React.useState(props?.total_page)
  const [jobs, setJobs] = React.useState(props?.data)

  React.useEffect(() => {
    if (state?.authSlice?.token == "") {
      router.push("/login")
    } else {
      setUserData(state?.authSlice?.userData)
    }
  }, [])

  for (let index = 0; index < totalPage; index++) {
    pages.push(index + 1)
  }

  const getData = (pageNumber) => {
    setCurrentPage(pageNumber)
    axios
      .get(`https://hire-job.onrender.com/v1/job?page=${pageNumber}`)
      .then((response) => {
        // console.log(response?.data?.data?.rows)
        setJobs(response?.data?.data?.rows)
      })
  }

  const handleDecrement = () => {
    let countPage = currentPage - 1
    if (countPage <= 0) {
      countPage = 1
    }
    setCurrentPage(countPage)
    axios
      .get(`https://hire-job.onrender.com/v1/job?page=${countPage}`)
      .then((response) => {
        setJobs(response?.data?.data?.rows)
      })
  }

  const handleIncrement = () => {
    let countPage = currentPage + 1
    if (countPage > totalPage) {
      countPage = totalPage
    }
    setCurrentPage(countPage)
    axios
      .get(`https://hire-job.onrender.com/v1/job?page=${countPage}`)
      .then((response) => {
        setJobs(response?.data?.data?.rows)
      })
  }

  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div className="bg-primary">
          <h1 className="container fw-bold py-4 text-white">Top Jobs</h1>
        </div>
        <div className="container py-4">
          {/* <div className="input-group mb-3 py-4">
            <input
              type="text"
              className="form-control py-3"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary px-5"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div> */}
          <div className="card">
            <ul className="list-group">
              {jobs.map((user) => {
                return userData?.id != user.id ? (
                  <Listjob user={user} key={user.id} />
                ) : (
                  ""
                )
              })}
            </ul>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg justify-content-center py-3">
              <li className="page-item">
                <button className="page-link" onClick={handleDecrement}>
                  Previous
                </button>
              </li>
              {pages.map((page, index) => {
                return (
                  <li
                    className="page-item"
                    key={index}
                    onClick={() => getData(page)}
                  >
                    <a
                      className={`page-link ${
                        page == currentPage ? "active" : ""
                      }`}
                      href="#"
                    >
                      {page}
                    </a>
                  </li>
                )
              })}
              <li className="page-item">
                <button className="page-link" onClick={handleIncrement}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const token = getCookie("token", { req, res })
  // Fetch data from external API
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    }
  }
  const response = await axios.get("https://hire-job.onrender.com/v1/job")
  const data = response?.data?.data?.rows
  const total_page = response?.data?.data?.total_page

  // Pass data to the page via props
  return { props: { data, total_page } }
}
