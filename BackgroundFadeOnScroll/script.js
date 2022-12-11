const headerBg = document.querySelector('.bg')

window.addEventListener('scroll', function (event) {
    headerBg.style.opacity = 1 - +this.window.pageYOffset / 550 + ''
    headerBg.style.backgroundPositionY = - +this.window.pageYOffset / 2 + 'px';
    headerBg.style.top = - +this.window.pageYOffset + 'px';
})