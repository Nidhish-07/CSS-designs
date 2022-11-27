'use strict'

function changeColor(color){
    document.body.style.background=color;

    document.querySelectorAll('span').forEach((s)=>(s.classList.remove('active')))

    event.target.classList.add('active')
    // (function(event){
    //     console.log(event);
    // })()
}