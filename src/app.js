import "./scss/app.scss"
import { workData, projData } from "./data/data"
import navbar from "./components/navbar"
import workExperience from "./components/work"
import projectCard from "./components/projects"

const app = () => {
    document.getElementById("nav").innerHTML = navbar()
    workExperience(workData)
    projectCard(projData)
}


app()