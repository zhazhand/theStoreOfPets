import { Cat } from "../model/cat.model.js";

export class CatController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }

  getItems(array) {
    return array.filter(elem => elem instanceof Cat);
  }

  tryToBuy(id,el){
    
    let button = el.target;
    button.setAttribute('data-candidate', id);     
  }
}