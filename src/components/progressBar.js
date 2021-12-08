const progressBar = () => {
    const body = document.querySelector('body');
    const progressBar = document.querySelector('.progress-bar')
    const scrollToTop = document.querySelector('.scroll-to-top')

    function stretch(){
        const pixelScrolled  = window.scrollY
        const viewPortHeight = window.innerHeight
        const totalHeightScrollable = body.scrollHeight

        // Convert pixels to % and style progress bar width
        const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewPortHeight)) * 100
        progressBar.style.width = Math.round(pixelsToPercentage) + "%"

        // Scroll to top button only visible at certain point
        if(pixelScrolled >= 500){
            scrollToTop.style.visibility = "visible"
        } else {
            scrollToTop.style.visibility = "hidden"
        }
    }

    window.addEventListener('scroll', stretch)
}

export default progressBar


