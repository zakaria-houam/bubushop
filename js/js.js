const menu = document.querySelector(".menu");
var list = document.querySelector(".header-down ul")
menu.addEventListener('click',function(){
    list.classList.toggle('show');
})
list.addEventListener('click',function(){
    list.classList.toggle('show');
})