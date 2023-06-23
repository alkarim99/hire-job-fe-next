import React from "react"
import Link from "next/link"

function Tagskill(props) {
  const { skillName } = props
  return (
    <>
      <Link
        className="btn btn-outline-warning text-white m-1 fw-semibold"
        href="#"
        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
      >
        {skillName}
      </Link>
    </>
  )
}

export default Tagskill
