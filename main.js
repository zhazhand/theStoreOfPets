import { MainController } from "./controller/mainController.js";

const mainController = new MainController;
const cartButton = document.querySelector('button.cart');
const navigation = document.querySelectorAll('.navigation button');

for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', () => {mainController.changeView(i)});
}

cartButton.addEventListener('click', () => {mainController.showCart()});

window.onload = pageOnLoad;

function pageOnLoad() {
  mainController.bannerRender();
}
