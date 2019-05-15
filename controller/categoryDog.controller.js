import { Dog } from "../model/dog.model.js";

export class DogController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }

  getItems(array) {
    return array.filter(elem => elem instanceof Dog);
  }

  tryToBuy(id,el){
    
    let button = el.target;
    button.setAttribute('data-candidate', id);     
  }
}