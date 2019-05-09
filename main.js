import {PetShop} from"./model/petShop.model.js";
import {Banner} from"./view/banner.view.js";

const banner = new Banner;
const petShop = new PetShop;
const container = document.querySelector('.viewContainer');
const cartButton = document.querySelector('button.cart');
const cartClose = document.querySelector('button.cart-over');
const dogs = document.querySelectorAll('.navigation button')[0];
const cats = document.querySelectorAll('.navigation button')[1];
const hamsters = document.querySelectorAll('.navigation button')[2];
const newAnimal = document.querySelectorAll('.navigation button')[3];

cartButton.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));
cartClose.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));

window.onload = pageOnLoad;
function pageOnLoad(){
  petShop.getList();
  if(sessionStorage.getItem('allPets')){
    banner.render();
  }else{setTimeout(()=>{
    petShop.getList();banner.render();},200)
  }
  
}

