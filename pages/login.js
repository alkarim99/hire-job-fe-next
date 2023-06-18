import React from "react"

function Login() {
  return (
    <>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center gap-3">
          <div
            className="col"
            style={{
              padding: "3vw",
              height: "95vh",
              backgroundImage: "url('hero-image-auth.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
            }}
          >
            <img src="logo-2.png" alt="logo-2" />
            <h1 style={{ position: "relative", top: "23%", width: "61%" }}>
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h3>Halo, Pewpoeple</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form>
              <div class="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div class="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukkan kata sandi"
                />
              </div>
              <p className="text-end">
                <a href="#">Lupa kata sandi?</a>
              </p>
              <button type="submit" className="btn btn-warning">
                Masuk
              </button>
            </form>
            <p className="text-center">
              Anda belum punya akun? <a href="#">Daftar Di sini</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
