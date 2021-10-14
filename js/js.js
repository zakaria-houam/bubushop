const menu = document.querySelector(".menu");
const closes = document.querySelector(".bx-x");
const listitem = document.querySelectorAll('#list-item');
var list = document.querySelector(".header-down ul")
for ( var i =0 ; i< listitem.length ; i++){
    listitem[i].addEventListener('click',function(){
        list.classList.toggle('show');
    })
}
menu.addEventListener('click',function(){
    list.classList.toggle('show');
})
closes.addEventListener('click',function(){
    list.classList.toggle('show');
})

var mycard = document.querySelector(".my-card");
const closecard = document.querySelector(".my-card .bx-x");
const BtnCard = document.querySelector(".btn-show-card");
BtnCard.addEventListener('click', function(){
    mycard.classList.toggle('show-card');
    
})
closecard.addEventListener('click', function(){
    mycard.classList.toggle('show-card');
    
})
var shopbag = document.querySelector(".bx-shopping-bag");
shopbag.addEventListener('click', function(){
    mycard.classList.toggle('show-card');
    
})
 addtocartbtn = document.querySelectorAll(".product .bxs-cart-add");
 for (var i = 0 ; i<addtocartbtn.length ; i++){
     addtocartbtn[i].addEventListener('click',updatecart);
 }
 totalprice = 0 ;
 function updatecart(e){
     currentbtn = e.target;
     likeadddiv = currentbtn.parentElement;
     productcontainer = likeadddiv.parentElement;
     producttitle = productcontainer.getElementsByClassName('product-title')[0].innerText;
     productprice = productcontainer.getElementsByClassName('price')[0].innerText;
     productimg = productcontainer.querySelectorAll('img')[0].src;
     addnewproducttocart(producttitle,productprice,productimg);

     
     cartprices = productcontainer.getElementsByClassName('price');
     for ( var i = 0 ; i < cartprices.length ; i++){
         totalprice = totalprice + parseInt(cartprices[i].innerText.replace('DA',''));
     }
     document.querySelectorAll(".finale-price")[0].innerText = totalprice + 'DA' ;
     document.querySelectorAll(".total-price")[0].innerText = totalprice + 'DA' ;
 }
 mycart = document.querySelector(".my-card");
 function addnewproducttocart(producttitle,productprice,productimg){
     div = document.createElement('div');
     div.classList.add('card-product');
     insidedivcontent = `<img src="${productimg}" alt="">
     <h1 class="card-product-name">${producttitle}</h1>
     
     <h2 class="card-product-price">${productprice}</h2>
     <div class="like-add">
         <i class='bx bxs-cart-add'></i>
         <i class='bx bx-x-circle'></i>
        
     </div>`

     div.innerHTML = insidedivcontent ;
     mycart.appendChild(div);
     removebtn = document.getElementsByClassName('bx-x-circle');
     for (var i = 0 ; i<removebtn.length ; i++){
         removebtn[i].addEventListener('click', removeproduct);
     }

     
    
     
 }
 function removeproduct(e){
     cardproduct = e.target.parentElement.parentElement;
     cardproduct.remove();
     updatePriceAfterRemove();

 }
 function updatePriceAfterRemove() {
    
    cartPrice = productcontainer.getElementsByClassName('price');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('DA', '');
        totalprice = totalprice - parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('finale-price')[0].innerText = totalprice + 'DA';
    document.getElementsByClassName('total-price')[0].innerText = new Number(totalprice).toLocaleString('en');

}
 
 
    
