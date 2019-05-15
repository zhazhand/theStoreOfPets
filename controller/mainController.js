import { PetShopModel } from "../model/petShop.model.js";
import { Banner } from "../view/banner.view.js";
import { DogCategory } from "../view/categoryDogs.view.js";
import { CatCategory } from "../view/categoryCat.view.js";
import { HamsterCategory } from "../view/categoryHamster.view.js";
import { FormView } from "../view/form.view.js";
import { CartView } from "../view/cart.view.js";
import { Dog } from "../model/dog.model.js";
import { Hamster } from "../model/hamster.model.js";
import { Cat } from "../model/cat.model.js";

const banner = new Banner;
const cartView = new CartView;
const dogCategory = new DogCategory;
const catCategory = new CatCategory;
const hamsterCategory = new HamsterCategory;
const formView = new FormView;

export class MainController {
  constructor() {
    this.container = document.querySelector('.viewContainer');
    this.score = document.querySelector('.score');
    this.shop = {};
  }

  async bannerRender() {
    const response = await fetch('./assets/pets.json');
    const data = await response.json();
    this.shop = new PetShopModel(data);
    banner.render(this.shop.store.pets);
  }

  changeView(index){
    this.container.innerHTML = '';
    switch (index) {
      case 0:
        this.container.appendChild(dogCategory.render(this.shop.store.pets));
        break;
      case 1:
        this.container.appendChild(catCategory.render(this.shop.store.pets));
      break;
      case 2:
        this.container.appendChild(hamsterCategory.render(this.shop.store.pets));
        break;
      case 3:
        this.container.appendChild(formView.render());
        break;
    }
  }

  checkAttr(el){
    if (el.target.hasAttribute('data-send')){
      let type = this.container.querySelectorAll('select')[0].value;
      let fur = this.container.querySelectorAll('select')[1].value;
      let color = this.container.querySelectorAll('input')[0].value;
      let price = this.container.querySelectorAll('input')[1].value;
      let name = this.container.querySelectorAll('input')[2].value;
      this.addPet(type, fur, color, price, name);
    } else if (el.target.hasAttribute('data-candidate')){
      let candidateId = el.target.getAttribute('data-candidate');
      this.putItemInCart(parseInt(candidateId));
    } else if (el.target.hasAttribute('data-cancel')){
      this.cancelBuying();
    } else if (el.target.hasAttribute('data-confirm')){
      this.confirmBuying();
    } else if (el.target.hasAttribute('data-cancel-one')){
      let currentElement = el.target.parentElement.parentElement;
      let parent = currentElement.parentElement;
      let itemId = el.target.getAttribute('data-cancel-one');
      this.removeItemFromCart(parseInt(itemId));
      parent.removeChild(currentElement);
    }
  }

  showCart(){
    cartView.render(this.shop.store.cart);
  }

  changeCartScore(){
    return this.score.innerText = this.shop.store.cart.length ? this.shop.store.cart.length : '';
  }

  addPet(type, fur, color, price, name){
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    let item;
    if(type === 'dog'){
      item = new Dog(color, price, newName);
    }
    else if(type === 'hamster'){
      item = new Hamster(color, price, fur);
    } else {
      item = new Cat(color, price, newName, fur);
    }
    item.type = type;
    this.shop.store.pets.push(item);
    banner.render(this.shop.store.pets);
    this.container.innerHTML = '';
  }

  putItemInCart(id){
    let index;
    for (let i = 0; i < this.shop.store.pets.length; i++) {
      if(id === this.shop.store.pets[i].id){
        index = i;
      }  
    }
    let elem = this.shop.store.pets.splice(index, 1);
    this.shop.store.cart.push(elem[0]);
    banner.render(this.shop.store.pets);
    this.changeCartScore();
    this.container.innerHTML = '';
  }

  removeItemFromCart(id){
    let index;
    for (let i = 0; i < this.shop.store.cart.length; i++) {
      if(id === this.shop.store.cart[i].id){
        index = i;
      }  
    }
    let elem = this.shop.store.cart.splice(index, 1);
    this.shop.store.pets.push(elem[0]);
    banner.render(this.shop.store.pets);
    this.changeCartScore();
  }

  confirmBuying(){
    this.shop.store.cart.length = 0;
    this.changeCartScore();
    this.container.innerHTML = '';
  }

  cancelBuying(){
    let candidates = this.shop.store.cart.slice();
    this.shop.store.cart.length = 0;
    this.shop.store.pets = this.shop.store.pets.concat(candidates);
    banner.render(this.shop.store.pets);
    this.changeCartScore();
    this.container.innerHTML = '';
  }
  getPets(){
    return this.shop.store.pets;
  }
}