import React from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useSelector, useDispatch } from "react-redux"
import { addAuth } from "@/store/reducers/authSlice"

function Listexperience(props) {
  const { userId, experience } = props
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [userData, setUserData] = React.useState("")

  React.useEffect(() => {
    setUserData(state?.authSlice?.userData)
  }, [])

  const handleDeleteJob = () => {
    axios
      .delete(`https://hire-job.onrender.com/v1/job/${experience.id}`)
      .then(() => {
        Swal.fire({
          title: "Delete Skills Success!",
          text: "Delete Skills Success!",
          icon: "success",
        })
        axios
          .get("https://hire-job.onrender.com/v1/profile")
          .then((response) => {
            dispatch(addAuth(response?.data?.data))
          })
      })
      .catch((error) => {
        let text = "Kesalahan Pada Aplikasi Kami!"
        const errors = error?.response?.messages
        if (Object.keys(errors).length != 0) {
          text = ""
          for (const key in errors) {
            text += `${key}: ${errors[key].message} \n`
          }
        }
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.messages ?? text,
          icon: "error",
        })
      })
  }

  return (
    <>
      <div className="row">
        <div className="col text-center align-self-center">
          <img src="../suitcase.png" alt="suitcase" width={"40vw"} />
        </div>
        <div className="col-10">
          <h4 className="mb-0 fw-semibold d-flex justify-content-between">
            {experience.position}
          </h4>
          <p className="fw-light m-0">{experience.company}</p>
          <p className="text-muted">{experience.date}</p>
          <p>{experience.description}</p>
        </div>
      </div>
    </>
  )
}

export default Listexperience
