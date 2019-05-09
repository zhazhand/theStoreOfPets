import {ItemController} from "../controller/item.controller.js"

const itemController = new ItemController;

export class ItemView {

  render(item){
    const element = itemController.getItem(item);
    let card = document.createElement('div');
    card.classList.add('card');
    let str = `<div class="card-header">Type of pet: ${element.type}</div><div class="card-body">`;
    if(element.name){
      str += `<h5 class="card-title">Name: ${element.name}</h5>`;
    }
    str += `<p class="card-text">Color: ${element.color}</p>`;
    if (element.isFluffy){
      str += `<p class="card-text">Fur: ${element.isFluffy}</p>`;
    }
    str+= `<p class="card-text">Cost: ${element.price}$</p>
    <button class="btn btn-primary candidateForBuying" data-id="${element.id}">buy me</button></div>`;
    card.innerHTML = str;
    return card;
  }

  
}