import { Helper } from "../helper/helper.js"

const helper = new Helper;

export class CartController{
  getItem(index){
    let animals = this.getAll();
    let pet = animals.find((el) => el.id === index);
    pet.type = this.defineType(pet);
    return pet;
  }

  getAll(){
    let animals = JSON.parse(sessionStorage.getItem('candidatesForBuying'));
    return animals;
  }

  confirmBuying(){
    sessionStorage.removeItem('candidatesForBuying');
  }

  cancelBuying(){
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    array = array.concat(candidates);
    this.confirmBuying(); 
    sessionStorage.setItem('allPets',JSON.stringify(array));
  }

  cancelOne(el){
    let array = JSON.parse(sessionStorage.getItem('allPets'));
    let candidates = this.getAll();
    let index = helper.findIndex(candidates, el);
    let refused = candidates.splice(index, 1);
    array.push(refused);
    sessionStorage.setItem('allPets',JSON.stringify(array))
    sessionStorage.setItem('candidatesForBuying',JSON.stringify(candidates));
  }
}