const progressBar = () => {
    const body = document.querySelector('body');
    const progressBar = document.querySelector('.progress-bar')
    const scrollToTop = document.querySelector('.scroll-to-top')

    function stretch() {
        const pixelScrolled = window.scrollY
        const viewPortHeight = window.innerHeight
        const totalHeightScrollable = body.scrollHeight

        // Convert pixels to % and style progress bar width
        const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewPortHeight)) * 100
        progressBar.style.width = Math.round(pixelsToPercentage) + "%"

        // Scroll to top button only visible at certain point
        if (pixelScrolled >= 500) {
            scrollToTop.style.visibility = "visible"
        } else {
            scrollToTop.style.visibility = "hidden"
        }

        // Title animate on scroll from scratch
        /*
        const title = document.querySelector("#prjcts")
        let rect = title.getBoundingClientRect()
        let windowHeight = window.innerHeight
        let visibility = 150
        if (rect.top >= windowHeight - visibility) {
            title.setAttribute('style', 'opacity: 0; transform: translateY(150%)');
            title.classList.add("fade-right")
        } else {
            title.setAttribute('style', 'opacity: 1; transform: translateY(0%)');
        }
        */

    }

    window.addEventListener('scroll', stretch)
}

export default progressBar


