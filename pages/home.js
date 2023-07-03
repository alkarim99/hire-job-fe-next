import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import axios from "axios"
import Link from "next/link"

import Listjob from "@/components/listjob"
import ButtonPagination from "@/components/buttonPagination"
import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

export default function Home() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const [userData, setUserData] = React.useState("")
  let pages = []
  const [currentPage, setCurrentPage] = React.useState(1)
  const [totalPage, setTotalPage] = React.useState("")
  const [jobs, setJobs] = React.useState([])

  React.useEffect(() => {
    if (Object.keys(state?.authSlice?.userData).length == 0) {
      router.push("/login")
    } else {
      setUserData(state?.authSlice?.userData)
      axios.get("https://hire-job.onrender.com/v1/job").then((response) => {
        setTotalPage(response?.data?.data?.total_page)
        setJobs(response?.data?.data?.rows)
      })
    }
  }, [])

  for (let index = 0; index < totalPage; index++) {
    pages.push(index + 1)
  }

  const getData = (pageNumber) => {
    console.log(pageNumber)
    axios
      .get(`https://hire-job.onrender.com/v1/job?page=${pageNumber}`)
      .then((response) => {
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
              {/* {pages.map((page, index) => {
                return (
                  <>
                    <li className="page-item">
                      <button className="page-link">{page}</button>
                    </li>
                  </>
                )
              })} */}
              {pages.map((page, index) => {
                return <ButtonPagination page={page} key={index} />
              })}
              {/* {pages.map((page, index) => {
                return (
                  <>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href=""
                        onClick={getData(page)}
                      >
                        {page}
                      </Link>
                    </li>
                  </>
                )
              })} */}
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
