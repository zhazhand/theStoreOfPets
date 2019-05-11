import { Banner } from "../view/banner.view.js"
import { CartIndicatorView } from "../view/cartIndicator.view.js"

const cartIndicator = new CartIndicatorView;
const banner = new Banner;

export class DogController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }

  define(){
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    return this.getItems(this.animals);
  }

  getItems(array) {
    return array.filter(elem => !elem.isFluffy && elem.name);
  }

  tryToBuy(id){
    let arrayOfPets = JSON.parse(sessionStorage.getItem('allPets'));
    let arrayCandidates = JSON.parse(sessionStorage.getItem('candidatesForBuying')) ? JSON.parse(sessionStorage.getItem('candidatesForBuying')) : [];
    let index;let elem; 
    for (let i = 0; i < arrayOfPets.length; i++) {
      let item = arrayOfPets[i];
      if(item.id === id){
        index = i;
        elem = item;
      }
    }
    arrayCandidates.push(elem);
    sessionStorage.setItem('candidatesForBuying', JSON.stringify(arrayCandidates));
    arrayOfPets.splice(index,1);
    sessionStorage.setItem('allPets', JSON.stringify(arrayOfPets));
    banner.render();
    cartIndicator.render();
    this.parent.innerHTML = '';
     
  }
}