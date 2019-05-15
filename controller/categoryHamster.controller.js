import { Hamster } from "../model/hamster.model.js";

export class HamsterController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }

  getItems(array) {
    return array.filter(elem => elem instanceof Hamster);
  }

  tryToBuy(id,el){
    
    let button = el.target;
    button.setAttribute('data-candidate', id);     
  }
}