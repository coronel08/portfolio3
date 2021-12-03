function projectCard(projData) {
    let projects = document.querySelector("#projects")
    let projSelect = document.querySelector("#filter-proj").children
    
    // add event listener for buttons
    for (let proj of projSelect) {
        proj.addEventListener("click", (e) => {
            let filteredProj = projData.filter((data) => data.tags === e.target.innerText)
            for (let item of projSelect){
                item.classList.remove("actv")
            }
            proj.classList.toggle("actv")
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


            // Create function for below FA Icons and Links
            function combineLinkAndIcon(icon,link){
                let aTag = document.createElement("a")
                if (link.length > 1){
                    aTag.target="_blank"
                    aTag.href = link
                    aTag.append(icon)
                    return aTag
                } else {
                    icon.classList.add("disabled")
                    return icon
                }
            }
            // FA Icons for Git
            let faGit = document.createElement("i")
            faGit.classList.add("fab", "fa-git-square", "fa-3x")
            let gitLink = combineLinkAndIcon(faGit,proj.git)
            // FA Icons for Link 
            let faLink = document.createElement("i")
            faLink.classList.add("fas", "fa-external-link-alt", "fa-lg")
            let projLink = combineLinkAndIcon(faLink, proj.link)
            // Proj Title
            let projTitle = document.createElement("h4")
            projTitle.classList.add("text-lg", "font-bold")
            projTitle.innerText = proj.project
            // Append icons, links and title to flex row
            projFlex.append(gitLink, projTitle, projLink)

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