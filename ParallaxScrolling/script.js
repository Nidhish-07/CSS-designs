let bg=document.querySelector('.bg')
let sun=document.querySelector('.sun')
let mountain=document.querySelector('.mountain')
let road=document.querySelector('.road')
let text=document.querySelector('.text')

window.addEventListener('scroll', ()=>{
    let val=window.scrollY;

    bg.style.top=val*0.5+'px';
    sun.style.right=val*5+'px';
    sun.style.bottom=val*5+'px';
    mountain.style.top=val*0.15+'px';
    road.style.top=val*0.15+'px';
    text.style.top=val*1+'px';
    
})