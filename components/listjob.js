import React from "react"
import Tagskill from "./tagskill"
import Link from "next/link"

function Listjob(props) {
  const { user } = props
  return (
    <>
      <li className="list-group-item py-4">
        <div className="row flex-column flex-md-row justify-content-center justify-content-md-around align-items-center text-center text-md-start gap-3">
          <div className="col col-md-2 text-center">
            {user.photo != null ? (
              <img
                className="img-fluid align-self-center rounded-circle"
                src={user.photo}
                alt="pp-user"
              />
            ) : (
              <img
                className="img-fluid align-self-center rounded-circle"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="pp-user"
              />
            )}
          </div>
          <div className="col col-md-6">
            <h4 className="fw-semibold">{user.fullname}</h4>
            <p className="text-muted m-0">
              <img src="suitcase.png" alt="suitcase" width={"17px"} />{" "}
              {user.job_title}
            </p>
            <p className="text-muted mb-2">
              <img src="map.png" alt="map" />{" "}
              {user?.domicile != "-" ? (
                user?.domicile
              ) : (
                <span className="text-danger fw-bold">Belum Ada Domisili</span>
              )}
            </p>
            <div className="d-inline">
              {user?.skills?.length != 0 ? (
                user?.skills?.map((skill, index) => {
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
          <div className="col col-md-2 text-end">
            <Link className="btn btn-primary btn-lg" href={`/job/${user.id}`}>
              Lihat Profile
            </Link>
          </div>
        </div>
      </li>
    </>
  )
}

export default Listjob
