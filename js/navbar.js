const mobile_nav=document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.head');

mobile_nav.addEventListener('click',()=>{
    headerElem.classList.toggle('active');
  
})

