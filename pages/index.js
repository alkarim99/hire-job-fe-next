import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "@/store/reducers/counterSlice"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Index() {
  // const count = useSelector((state) => state.counterSlice.value)
  // const dispatch = useDispatch()

  // console.log(count)

  // const handleClick = () => {
  //   dispatch(increment())
  // }

  // throw new Error("Error api")

  return (
    <>
      <main className="mb-5  bg-white">
        <Navbar />
        <div className="container">
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-4 text-center text-md-start">
              <h1 className="fw-bold">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h1>
              <p className="my-4">
                Platform untuk mempertemukan tenaga kerja dengan perusahaan.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Mulai Dari Sekarang
              </a>
              {/* <a
                href="#"
                className="btn btn-primary btn-lg"
                // onClick={handleClick()}
              >
                Counter :
              </a> */}
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-1.png"
                className="img-fluid"
                alt="hero-image-1"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row-reverse justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 fw-bold">
                Kenapa harus mencari tallent di peworld
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "0",
                  paddingLeft: "1em",
                  textIndent: "-1em",
                }}
              >
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Dibekali technical skill terupdate
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Kualifikasi talenta terukur
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Growth Mindset Tallent
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Memiliki motivasi tinggi
                </li>
              </ul>
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-2.png"
                className="img-fluid"
                alt="hero-image-2"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 fw-bold">Skill Tallent</h2>
              <p>Teknologi terkini yang dimiliki tallent kami</p>
              <div className="row flex-column flex-md-row">
                <div className="col d-none d-md-block">
                  <ul
                    style={{
                      listStyle: "none",
                      marginLeft: "0",
                      paddingLeft: "1em",
                      textIndent: "-1em",
                    }}
                  >
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      Java
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      Kotlin
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      PHP
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      JavaScript
                    </li>
                  </ul>
                </div>
                <div className="col d-none d-md-block">
                  <ul
                    style={{
                      listStyle: "none",
                      marginLeft: "0",
                      paddingLeft: "1em",
                      textIndent: "-1em",
                    }}
                  >
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      Golang
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      C++
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      Ruby
                    </li>
                    <li className="mb-3">
                      <img src="tick2.png" className="me-4" alt="tick2" />
                      10+ Bahasa Lainnya
                    </li>
                  </ul>
                </div>
                <div className="col d-block d-md-none">
                  Java, Kotlin, PHP, JavaScript, Golang, C++, Ruby, 10+ Bahasa
                  Lainnya
                </div>
              </div>
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-3.png"
                className="img-fluid"
                alt="hero-image-3"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="container mb-5 pb-5">
        <div className="d-none d-md-flex row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4 text-center">
          <div className="col">
            <h2 className="mb-4 fw-bold">Their opinion about peworld</h2>
            <div className="row justify-content-center gap-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src="pp-harry-styles.png"
                    alt="pp-harry-styles"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Harry Styles</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                    Peworld memudahkan kami sebagai tallent dalam mencari
                    perusahaan yang sesuai dengan kami.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src="pp-niall-horan.png"
                    alt="pp-niall-horan"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Niall Horan</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                    Peworld menyiapkan kami yang bukan dari background IT
                    menjadi siap di dunia kerja IT
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <img
                    src="pp-louis-tomlinson.png"
                    alt="pp-louis-tomlinson"
                    style={{
                      border: "10px solid rgba(251, 176, 23, 0.37)",
                      borderRadius: "50%",
                    }}
                  />
                  <h5 className="card-title fw-semibold">Louis Tomlinson</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                    Ilmu yang disampaikan relevan dengan dunia kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row flex-column flex-md-row justify-content-between align-items-center px-5 py-4 mb-4 bg-primary"
          style={{
            height: "294px",
            backgroundImage: "url('bg-mulai-dari-sekarang.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "5vw 1vw",
          }}
        >
          <div className="col">
            <h2 className="m-0 text-white text-center text-md-start">
              Sudah yakin bergabung dengan kami?
            </h2>
          </div>
          <div className="col text-center text-md-end">
            <a
              href="#"
              className="btn btn-primary btn-lg bg-light text-primary fw-bold p-3"
            >
              Mulai Dari Sekarang
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
