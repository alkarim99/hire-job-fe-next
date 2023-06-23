import React from "react"
import Tagskill from "./tagskill"
import Link from "next/link"

function Listjob(props) {
  const { user } = props
  return (
    <>
      <li className="list-group-item py-4">
        <div className="row flex-column flex-md-row justify-content-center justify-content-md-between align-items-center text-center text-md-start gap-3">
          <div className="col col-md-2 text-center">
            <img src={user.image} alt="pp-user" />
          </div>
          <div className="col col-md-7">
            <h4 className="fw-semibold">{user.fullname}</h4>
            <p className="text-muted m-0">
              <img src="suitcase.png" alt="suitcase" width={"17px"} />{" "}
              {user.job}
            </p>
            <p className="text-muted mb-2">
              <img src="map.png" alt="map" /> {user.location}
            </p>
            <div className="d-inline">
              {user.skills.map((skill) => {
                return <Tagskill skillName={skill} />
              })}
            </div>
          </div>
          <div className="col col-md-2">
            <Link className="btn btn-primary btn-lg" href="/profile">
              Lihat Profile
            </Link>
          </div>
        </div>
      </li>
    </>
  )
}

export default Listjob
