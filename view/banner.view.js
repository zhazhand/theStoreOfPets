import { PetShopView } from "../controller/petShopView.controller.js";

const controller = new PetShopView;

export class Banner{
  constructor(){
    this.catsContainer = document.querySelectorAll('table td')[0];
    this.greaterThanAverageContainer = document.querySelectorAll('table td')[1];
    this.fluffyOrWhiteContainer = document.querySelectorAll('table td')[2];
  }

  render(list){
    this.catsContainer.innerHTML = '';
    this.catsContainer.appendChild(this.getCats(list));
    this.greaterThanAverageContainer.innerHTML = '';
    this.greaterThanAverageContainer.appendChild(this.getGreaterThenAverage(list));
    this.fluffyOrWhiteContainer.innerHTML = '';
    this.fluffyOrWhiteContainer.appendChild(this.getFluffyOrWhite(list));
  }

  getCats(list){
    let data = controller.define(list).cats;
    let parent = document.createElement('ol');
    for (let i = 0; i < data.length; i++) {
      let el = data[i];
      let element = document.createElement('li');
      element.innerHTML = `${el.name}, ${el.color}, ${el.price}$`;
      parent.appendChild(element);
    }
    return parent;
  }
  
  getGreaterThenAverage(list){
    let data = controller.define(list).priceGreaterAverage;
    let parent = document.createElement('ol');
    for (let i = 0; i < data.length; i++) {
      let el = data[i];
      let element = document.createElement('li');

      if(el.name && el.isFluffy){
        element.innerHTML = `Cat: ${el.color}, ${el.price}$`;
      }else if(el.name){
        element.innerHTML = `Dog: ${el.color}, ${el.price}$`;
      }else{
        element.innerHTML = `Hamster: ${el.color}, ${el.price}$`;
      }
      
      parent.appendChild(element);
    }
    return parent;
  }
  
  getFluffyOrWhite(list){
    let data = controller.define(list).fluffy;
    let parent = document.createElement('ol');
    for (let i = 0; i < data.length; i++) {
      let el = data[i];
      let element = document.createElement('li');
      element.innerHTML = el.name?`Cat: ${el.color}, ${el.price}$`:`Hamster: ${el.color}, ${el.price}$`;
      parent.appendChild(element);
    }
    return parent;
  }
}