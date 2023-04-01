const menu = document.querySelector('.menu')
const body = document.body
const hamburger = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-circle-xmark')


hamburger.addEventListener('click',function(){
    menu.style.right="0";
})

close.addEventListener('click',function(){
    menu.style.right="-300px";
})



