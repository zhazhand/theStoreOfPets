import {PetShop} from"./model/petShop.model.js";

let petShop = new PetShop;
petShop.getList();
console.log(JSON.parse(sessionStorage.getItem('allPets')));
let cartButton = document.querySelector('button.cart');
let cartClose = document.querySelector('button.cart-over');
cartButton.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));
cartClose.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));

