function workExperience(workData) {
    // Selectors for work experience
    let workButtons = Array.from(document.querySelectorAll("#job")[0].children)
    let workAbout = document.querySelector("#work-about")
    let primWork = document.querySelector("#prim-work")
    let primDuties = document.querySelector("#prim-duties")
    let secWork = document.querySelector("#sec-work")
    let secDuties = document.querySelector("#sec-duties")

    // Set Default Value Dynamically
    workAbout.innerText = workData[0].about
    primWork.innerText = workData[0].primWork
    createList(workData[0].primDuties, primDuties)
    secWork.innerText = workData[0].secWork
    createList(workData[0].secDuties, secDuties)

    // Used to create list items for work experience 
    function createList(arr, destination) {
        destination.innerHTML = ""
        arr.forEach((i) => {
            let bulletPoint = document.createElement("li")
            bulletPoint.innerHTML = i
            destination.append(bulletPoint)
        })
    }

    // Add event listener to buttons and change content
    workButtons.forEach(workButton => {
        workButton.addEventListener("click", (e) => {
            workButtons.forEach(item => item.classList.remove("actv"))
            workButton.classList.add("actv")

            let work = workData.filter(data => data.job == e.target.innerText)

            workAbout.innerText = work[0].about
            primWork.innerText = work[0].primWork
            createList(work[0].primDuties, primDuties)
            secWork.innerText = work[0].secWork
            createList(work[0].secDuties, secDuties)
        })
    })
}

export default workExperience
