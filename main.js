import {PetShop} from"./model/petShop.model.js";
import {Banner} from"./view/banner.view.js";
import {DogCategory} from"./view/categoryDogs.view.js";
import {CatCategory} from"./view/categoryCat.view.js";
import {HamsterCategory} from"./view/categoryHamster.view.js";

const banner = new Banner;
const petShop = new PetShop;
const dogCategory = new DogCategory;
const catCategory = new CatCategory;
const hamsterCategory = new HamsterCategory;
const container = document.querySelector('.viewContainer');
const cartButton = document.querySelector('button.cart');
const cartClose = document.querySelector('button.cart-over');
const dogs = document.querySelectorAll('.navigation button')[0];
const cats = document.querySelectorAll('.navigation button')[1];
const hamsters = document.querySelectorAll('.navigation button')[2];
const newAnimal = document.querySelectorAll('.navigation button')[3];

cartButton.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));
cartClose.addEventListener('click',()=>document.querySelector('.overlay').classList.toggle('invis'));
dogs.addEventListener('click',()=>{changeContainerView(dogCategory.render())});
cats.addEventListener('click',()=>{changeContainerView(catCategory.render())});
hamsters.addEventListener('click',()=>{changeContainerView(hamsterCategory.render())});


window.onload = pageOnLoad;
function pageOnLoad(){
  petShop.getList();
  if(sessionStorage.getItem('allPets')){
    banner.render();
  }else{setTimeout(()=>{
    petShop.getList();banner.render();},200)
  }
}

function changeContainerView(par){
container.childNodes[0] ? container.replaceChild(par,container.childNodes[0]) : container.appendChild(par);
}
