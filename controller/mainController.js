import { PetShopController } from "./petShop.controller.js";
import { Banner } from "../view/banner.view.js";
import { DogCategory } from "../view/categoryDogs.view.js";
import { CatCategory } from "../view/categoryCat.view.js";
import { HamsterCategory } from "../view/categoryHamster.view.js";
import { FormView } from "../view/form.view.js";
import { CartView } from "../view/cart.view.js";
import { CartIndicatorView } from "../view/cartIndicator.view.js";

const banner = new Banner;
const petShopController = new PetShopController;
const cartView = new CartView;
const cartIndicatorView = new CartIndicatorView;
const dogCategory = new DogCategory;
const catCategory = new CatCategory;
const hamsterCategory = new HamsterCategory;
const formView = new FormView;

export class MainController {
  constructor() {
    this.container = document.querySelector('.viewContainer');
  }

  bannerRender() {
    petShopController.getList();
    if (sessionStorage.getItem('allPets')) {
      banner.render();
      cartIndicatorView .render();
    } else {
      setTimeout(() => {
        petShopController.getList();
        banner.render();
      }, 200)
    }
  }

  changeView(index){
    this.container.innerHTML = '';
    switch (index) {
      case 0:
        this.container.appendChild(dogCategory.render());
        break;
      case 1:
        this.container.appendChild(catCategory.render());
      break;
      case 2:
        this.container.appendChild(hamsterCategory.render());
        break;
      case 3:
        this.container.appendChild(formView.render());
        break;
    }
  }

  showCart(){
    cartView.render();
  }

  closeCart(element){
    element.classList.toggle('invis');
    element.firstElementChild.firstElementChild.lastElementChild.innerHTML = '';
  }
}