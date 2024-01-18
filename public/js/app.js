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

//! carousel video hero section

// const carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// function showSlide(index) {

//   carouselItems.forEach(item => {
//     item.style.display = 'none';
//   });

//   carouselItems[index].style.display = 'block';
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex);
// }

// function previousSlide() {
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showSlide(currentIndex);
// }

// showSlide(currentIndex);

// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', previousSlide);
//! navbar
// let nav = document.querySelector('.navigation');
// let navBtn = document.querySelector(".nav-btn-toggler")
// navBtn.addEventListener('click',() =>{
//     nav.classList.toggle("show-nav")
// })