const progressBar = () => {
    const body = document.querySelector('body');
    const progressBar = document.querySelector('.progress-bar')
    const scrollToTop = document.querySelector('.scroll-to-top')

    function stretch(){
        const pixelScrolled  = window.scrollY
        const viewPortHeight = window.innerHeight
        const totalHeightScrollable = body.scrollHeight

        // Convert pixels to %
        const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewPortHeight)) * 100
        progressBar.style.width = Math.round(pixelsToPercentage) + "%"
    }

    window.addEventListener('scroll', stretch)
}

export default progressBar


