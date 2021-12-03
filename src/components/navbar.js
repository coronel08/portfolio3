const navbar = () => {
    let template = `
    <a href="/" class="text-white md:m-12 text-center mt-4">
        Home
    </a>
    <div class="hidden md:flex gap-8 text-blue-200">
        <p class="">Test</p>
        <p class="">Test2</p>
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
