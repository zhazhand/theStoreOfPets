import { Cat } from "./cat.model.js";
import { Dog } from "./dog.model.js";
import { Hamster } from "./hamster.model.js";

export class PetShop {
  
  constructor() {

    this.list = [];
  }
  addItem(item) {
    this.list.push(item);
  }
  delete(index) {
    this.list.splice(index,1);
  }
  getList(){
    fetch('./assets/pets.json')
    .then(response => response.json())
    .then(data => {sessionStorage.setItem('allPets',JSON.stringify(data))});
  }
}