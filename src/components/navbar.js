const navbar = () => {
    let template = `

    <div class="hidden md:flex text-blue-200 m-8 md:m-12 mt-4">
        <p class="logo">
            <span class="blue">Fidel</span><span>Mar</span>
        </p> 
    </div>
    <div class="flex gap-8 mr-8 m-4 text-blue-200 justify-between">
        <a href="/" class="text-white text-center" aria-label="home">
            <i class="fab fa-fort-awesome fa-lg"></i>
        </a>
        <a href="#wrk">Work</a>
        <a href="#prjcts">Projects</a>
    </div>
    `

    return template
}

export default navbar
