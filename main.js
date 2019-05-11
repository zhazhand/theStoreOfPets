import { MainController } from "./controller/mainController.js";
import { Banner } from "./view/banner.view.js";
import { CartView } from "./view/cart.view.js";

const banner = new Banner;
const cartView = new CartView;
const mainController = new MainController;
const container = document.querySelector('.viewContainer');
const cartContainer = document.querySelector('.cartContainer');
const cartButton = document.querySelector('button.cart');
const cartClose = document.querySelector('button.cart-over');
const overlay = document.querySelector('.overlay');
let navigation = document.querySelectorAll('.navigation button');

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', () => {mainController.changeView(i)});
}

cartButton.addEventListener('click', () => {mainController.showCart(overlay)});
cartClose.addEventListener('click', () => {mainController.closeCart(overlay)});

/* container.addEventListener('click', (e) => {
  watchAttributes(e);
})
cartContainer.addEventListener('click', (e) => {
  watchCart(e);
})
 */

window.onload = pageOnLoad;

function pageOnLoad() {
  mainController.bannerRender();
}

/* function watchAttributes(e){
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

function hideAndShowCart(){
  document.querySelector('.overlay').classList.toggle('invis')
} */