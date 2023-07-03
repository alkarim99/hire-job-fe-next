import React from "react"
import Link from "next/link"

function ButtonPagination(props) {
  const { page } = props
  return (
    <>
      <Link className="page-link" href="">
        {page}
      </Link>
    </>
  )
}

export default ButtonPagination
