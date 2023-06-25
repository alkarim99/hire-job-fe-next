import React from "react"

function Listexperience(props) {
  const { experience } = props
  return (
    <>
      <div className="row">
        <div className="col">
          <img
            src="../tokopedia-logo.png"
            alt="tokopedia-logo"
            className="img-fluid"
          />
        </div>
        <div className="col-10">
          <h4 className="mb-0 fw-semibold">{experience.position}</h4>
          <p className="fw-light m-0">{experience.company}</p>
          <p className="text-muted">
            {experience.startdate} - {experience.enddate}
          </p>
          <p>{experience.description}</p>
        </div>
      </div>
    </>
  )
}

export default Listexperience
