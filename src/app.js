import "./scss/app.scss"
import { workData, projData } from "./data/data"
import navbar from "./components/navbar"
import workExperience from "./components/work"
import projectCard from "./components/projects"
import progressBar from "./components/progressBar"

const app = () => {
    progressBar()
    document.getElementById("nav").innerHTML = navbar()
    workExperience(workData)
    projectCard(projData)
}


app()