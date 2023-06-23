import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Tagskill from "@/components/tagskill"
import Listjob from "@/components/listjob"
import Link from "next/link"

export default function Home() {
  const users = [
    {
      image: "pp-louis-tomlinson.png",
      fullname: "Louis Tomlinson",
      job: "Web Developer",
      location: "Indonesia",
      skills: ["PHP", "HTML", "JavaScript"],
    },
    {
      image: "pp-harry-styles.png",
      fullname: "Harry Styles",
      job: "Mobile Developer",
      location: "Indonesia",
      skills: ["React Native", "Java", "PostgreSQL"],
    },
    {
      image: "pp-niall-horan.png",
      fullname: "Niall Horan",
      job: "Full Stack Developer",
      location: "Indonesia",
      skills: ["ReactJS", "NextJS", "NodeJS"],
    },
  ]
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
            <ul className="list-group">
              {users.map((user) => {
                return <Listjob user={user} />
              })}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
