import { Helper } from "../helper/helper.js"
import { CartIndicatorView } from "../view/cartIndicator.view.js"
//import { CartView } from "../view/cart.view.js"
import { Banner } from "../view/banner.view.js"

const helper = new Helper;
const cartIndicator = new CartIndicatorView;
//const cartView = new CartView;
const banner = new Banner;

export class CartController{
  constructor(){
    this.container = document.querySelector('.cartContainer');
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
    this.container.parentElement.parentElement.parentElement.classList.toggle('invis');
    this.container.innerHTML = '';
    cartIndicator.render();
    banner.render();
  }

  cancelBuying(){
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    array = array.concat(candidates);
    this.confirmBuying(); 
    sessionStorage.setItem('allPets',JSON.stringify(array));console.log(this.container.parentElement.parentElement.parentElement)
    this.container.parentElement.parentElement.parentElement.classList.add('invis');
    this.container.innerHTML = '';
    cartIndicator.render();
    banner.render();
  }

  cancelOne(e, id){
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    let index = helper.findIndex(candidates, id);
    let refused = candidates.splice(index, 1);
    array.push(refused[0]);
    sessionStorage.setItem('allPets',JSON.stringify(array))
    sessionStorage.setItem('candidatesForBuying',JSON.stringify(candidates));
    cartIndicator.render();
    e.target.parentElement.parentElement.innerHTML = '';
    banner.render();
  }
}