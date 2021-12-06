const navbar = () => {
    let template = `
    <a id="home" href="/" class="text-white m-8 md:m-12 text-center mt-4">
        <i class="fab fa-fort-awesome fa-lg mt-4 md:mt-0"></i>
    </a>
    <div class="hidden md:flex gap-8 text-blue-200">
    <p class="logo">
        <span class="blue">Fidel</span><span>Mar</span>
    </p> 
    </div>
    <div class="flex gap-8 mr-8 m-4 text-blue-200 justify-between">
        <a href="#wrk">Work</a>
        <a href="#prjcts">Projects</a>
        <a href="#pricing">Pricing</a>
    </div>
    `

    return template
}

export default navbar
