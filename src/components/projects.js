function projectCard(projData) {
    let projects = document.querySelector("#projects")
    let projSelect = document.querySelector("#filter-proj").children
    
    // add event listener for buttons
    for (let proj of projSelect) {
        proj.addEventListener("click", (e) => {
            let filteredProj = projData.filter((data) => data.tags === e.target.innerText)
            createProjectCard(filteredProj)
        })
    }

    // takes filtered project from event listener button above
    function createProjectCard(filteredProj) {
        projects.innerHTML = ""
        for (let proj of filteredProj) {
            // Wrapper div, responsive col's
            let projCard = document.createElement("div")
            projCard.classList.add("col-span-12", "md:col-span-6", "lg:col-span-4", "sec-color-border", "p-2")

            // Create Icon Elements in a flex
            let projFlex = document.createElement("div")
            projFlex.classList.add("flex", "justify-between", "p-4")
            let faGit = document.createElement("i")
            faGit.classList.add("fab", "fa-git-square", "fa-3x")
            let faLink = document.createElement("i")
            faLink.classList.add("fas", "fa-external-link-alt", "fa-lg")
            let projTitle = document.createElement("h4")
            projTitle.classList.add("text-lg", "font-bold")
            projTitle.innerText = proj.project
            // append icons and title to flex row
            projFlex.append(faGit, projTitle, faLink)

            // Photo
            let projPhoto = document.createElement("img")
            projPhoto.classList.add("p-2")
            projPhoto.src = proj.photo

            // Text section and tag
            let projText = document.createElement("p")
            projText.innerText = proj.about
            let projTag = document.createElement("p")
            projTag.classList.add("inline-block", "rounded-full", "p-2")
            // Change to technology 
            projTag.innerHTML = `Built with: ${proj.built}`

            // Append all created items to Dom Selector
            projCard.append(projFlex, projPhoto, projText, projTag)
            projects.append(projCard)
        }
    }

}

export default projectCard