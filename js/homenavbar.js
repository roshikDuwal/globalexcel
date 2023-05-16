const mobile_nav1=document.querySelector('.mobile-home-navbar-btn');
const headerElem1 = document.querySelector('.heading');
const body=document.querySelector('body');
mobile_nav1.addEventListener('click',()=>{
    headerElem1.classList.toggle('active');

})

