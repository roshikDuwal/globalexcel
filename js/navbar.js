const mobile_nav=document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.head');
const page = document.querySelector(".page")
const body= document.querySelector(".body")

mobile_nav.addEventListener('click',()=>{
    headerElem.classList.toggle('active');
    page.classList.toggle('blur');
    body.classList.toggle('scrollremove');
})

