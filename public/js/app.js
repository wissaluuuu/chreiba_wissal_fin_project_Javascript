// const { Carousel } = require("bootstrap")

//! switch menu
let menu_breakfast = document.querySelector('.breakfast')
let menu_lunch = document.querySelector('.Lunch')
let button_break =document.querySelector('.btn-break')
let button_lunch =document.querySelector('.btn-lunch')
button_lunch.addEventListener('click',()=>{
    menu_breakfast.style.display='none'
    menu_lunch.style.display='block'
})
button_break.addEventListener('click',()=>{
    menu_breakfast.style.display='block'
    menu_lunch.style.display='none'
})

let btn = document.querySelector('.btn')
let modal = document.querySelector('.modal')
btn.addEventListener('click',()=>{
    modal.style.display="block"
})
//! modal sign in
let button_sign = document.querySelector(".signin-btn")
let button_login = document.querySelector(".login-btn")
let form_sign = document.querySelector('.signin')
let form_login = document.querySelector('.login')
button_sign.addEventListener('click',()=>{
    form_login.style.display='none'
    form_sign.style.display='block'
})
button_login.addEventListener('click',()=>{
    form_login.style.display='block'
    form_sign.style.display='none'
})
//! watch video hero section
let btn_watch = document.querySelector(".watch-video")
let video = document.querySelector('.video')
btn_watch.addEventListener("click",()=>{
    console.log("wissaluzgyjdsqb");
    video.style.display = "block"
})
//! carousel hand made
let carousel = document.querySelector(".carousel")
const dragging = (e) =>{
    carousel.scrollLeft ;
}
dragging()
carousel.addEventListener("mousemove",dragging);
