import { PetShop } from "./model/petShop.model.js";
import { Banner } from "./view/banner.view.js";
import { DogCategory } from "./view/categoryDogs.view.js";
import { CatCategory } from "./view/categoryCat.view.js";
import { HamsterCategory } from "./view/categoryHamster.view.js";
import { FormView } from "./view/form.view.js";
import { CartView } from "./view/cart.view.js";

const banner = new Banner;
const petShop = new PetShop;
const cartView = new CartView;
const dogCategory = new DogCategory;
const catCategory = new CatCategory;
const hamsterCategory = new HamsterCategory;
const formView = new FormView;
const container = document.querySelector('.viewContainer');
const cartContainer = document.querySelector('.cartContainer');
const cartScore = document.querySelector('.score');
const cartButton = document.querySelector('button.cart');
const cartClose = document.querySelector('button.cart-over');
const dogs = document.querySelectorAll('.navigation button')[0];
const cats = document.querySelectorAll('.navigation button')[1];
const hamsters = document.querySelectorAll('.navigation button')[2];
const newAnimal = document.querySelectorAll('.navigation button')[3];

cartButton.addEventListener('click', () => hideAndShowCart());
cartClose.addEventListener('click', () => hideAndShowCart());
dogs.addEventListener('click', () => {
  changeContainerView(dogCategory.render())
});
cats.addEventListener('click', () => {
  changeContainerView(catCategory.render())
});
hamsters.addEventListener('click', () => {
  changeContainerView(hamsterCategory.render())
});
newAnimal.addEventListener('click', () => {
  changeContainerView(formView.render())
});
container.addEventListener('click', (e) => {
  watchAttributes(e);
})
cartContainer.addEventListener('click', (e) => {
  watchCart(e);
})


window.onload = pageOnLoad;

function pageOnLoad() {
  petShop.getList();
  if (sessionStorage.getItem('allPets')) {
    banner.render();
  } else {
    setTimeout(() => {
      petShop.getList();
      banner.render();
    }, 200)
  }
}

function changeContainerView(par) {
  container.childNodes[0] ? container.replaceChild(par, container.childNodes[0]) : container.appendChild(par);
}

function watchAttributes(e){
  if(e.target.getAttribute('data-send') === 'close'){
    banner.render();
    container.innerHTML = '';
  }
  if(e.target.getAttribute('try-buy') === 'yes'){
    banner.render();
    increaseCart();
    cartContainer.children[0] ? cartContainer.replaceChild(cartView.render(),cartContainer.children[0]) : cartContainer.appendChild(cartView.render());
    container.innerHTML = '';
  }
}

function watchCart(e){
  let scoreText = +cartScore.innerText;
  if(e.target.getAttribute('data-sold') === 'yes'){
    cartScore.innerText = '';
    hideAndShowCart();
    e.target.parentElement.parentElement.firstElementChild.innerHTML = '';
  }
  if(e.target.getAttribute('data-cancel') === 'yes'){
    cartScore.innerText = '';
    hideAndShowCart();
    e.target.parentElement.parentElement.firstElementChild.innerHTML = '';
    banner.render();
  }
  if(e.target.getAttribute('data-cancel-one') === 'yes'){
    let newScore = scoreText - 1;
    cartScore.innerText = (newScore === 0) ? '' : newScore;alert(e.target.parentElement.parentElement.innerHtml)
    e.target.parentElement.parentElement.innerHtml = '';
    banner.render();
  }
}

function increaseCart(){
    let score = cartScore.innerText;
    score = +score + 1; 
    cartScore.innerText = score;
    return score;
}

function hideAndShowCart(){
  document.querySelector('.overlay').classList.toggle('invis')
}