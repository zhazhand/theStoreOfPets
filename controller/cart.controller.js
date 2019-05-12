import { Helper } from "../helper/helper.js"
import { CartIndicatorView } from "../view/cartIndicator.view.js"
import { Banner } from "../view/banner.view.js"

const helper = new Helper;
const cartIndicator = new CartIndicatorView;
const banner = new Banner;

export class CartController{
  constructor(){
    this.container = document.querySelector('.viewContainer');
  }

  getItem(index){
    let animals = this.getAll();
    let pet = animals.find((el) => el.id === index);
    pet.type = this.defineType(pet);
    return pet;
  }

  getAll(){
    return JSON.parse(sessionStorage.getItem('candidatesForBuying')) ? JSON.parse(sessionStorage.getItem('candidatesForBuying')) : [];
  }

  confirmBuying(){
    sessionStorage.removeItem('candidatesForBuying');
    this.closeCart();
    cartIndicator.render();
    banner.render();
  }

  cancelBuying(){
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    array = array.concat(candidates);
    this.confirmBuying(); 
    sessionStorage.setItem('allPets',JSON.stringify(array));
    this.closeCart();
    cartIndicator.render();
    banner.render();
  }

  cancelOne(e, id){
    let currentElement = e.target.parentElement.parentElement;
    let parent = currentElement.parentElement;
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    let index = helper.findIndex(candidates, id);
    let refused = candidates.splice(index, 1);
    array.push(refused[0]);
    sessionStorage.setItem('allPets',JSON.stringify(array))
    sessionStorage.setItem('candidatesForBuying',JSON.stringify(candidates));
    cartIndicator.render();
    parent.removeChild(currentElement);
    banner.render();
    if(!parent.children[0]){
      this.closeCart();
    }
  }

  closeCart(){
    this.container.innerHTML = '';
  }
}