import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div className="bg-primary">
          <h1 className="container fw-bold py-4 text-white">Top Jobs</h1>
        </div>
        <div className="container py-4">
          <div className="input-group mb-3 py-4">
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
          </div>
          <div className="card">
            <ul className="list-group list-group">
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img
                      src="pp-louis-tomlinson.png"
                      alt="pp-louis-tomlinson"
                    />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Louis Tomlinson</h4>
                    <p className="text-muted m-0">Web Developer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> Indonesia
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="/profile">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img src="pp-harry-styles.png" alt="pp-harry-styles" />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Harry Styles</h4>
                    <p className="text-muted m-0">Web Developer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> Indonesia
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="#">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img src="pp-niall-horan.png" alt="pp-niall-horan" />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Niall Horan</h4>
                    <p className="text-muted m-0">Web Developer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> Indonesia
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="#">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
