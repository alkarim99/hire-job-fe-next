import React from "react"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container mt-4 py-5 text-center text-md-start">
        <img src="logo-2.png" alt="logo-2" />
        <div className="row py-3">
          <div className="col col-md-3 text-white">
            <p>
              Talenta terbaik negeri untuk perubahan revolusi 4.0. Platform
              yang mempertemukan tenaga kerja dengan perusahaan.
            </p>
          </div>
        </div>
        <hr style={{ border: "2px solid white" }} />
        <div className="row text-white flex-column-reverse flex-md-row">
          <div className="col">
            <p>2023 Pewworld. All right reserved</p>
          </div>
          <div className="col text-center text-md-end">
            <Link href="#" className="text-decoration-none text-white me-5">
              Telepon
            </Link>
            <Link href="#" className="text-decoration-none text-white me-md-5">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
