import { ItemController } from "../controller/item.controller.js"

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
    str+= `<p class="card-text">Cost: ${element.price}$</p></div>`;
    let button = document.createElement('button');
    card.innerHTML = str;
    button.innerText = 'buy me';
    button.setAttribute('class', 'btn btn-primary');
    button.setAttribute('try-buy', 'no');
    button.addEventListener('click', (e) => {this.tryBuy(element, e)});
    card.lastChild.appendChild(button);

    return card;
  }

  tryBuy(elem, e){
    let arrayOfPets = JSON.parse(sessionStorage.getItem('allPets'));
    let arrayCandidates = JSON.parse(sessionStorage.getItem('candidatesForBuying')) ? JSON.parse(sessionStorage.getItem('candidatesForBuying')) : [];
    let index;
    for (let i = 0; i < arrayOfPets.length; i++) {
      let item = arrayOfPets[i];
      if(item.id === elem.id){
        index = i;
      }
    }
    arrayCandidates.push(elem);
    sessionStorage.setItem('candidatesForBuying', JSON.stringify(arrayCandidates));
    arrayOfPets.splice(index,1);
    sessionStorage.setItem('allPets', JSON.stringify(arrayOfPets));
    e.target.setAttribute('try-buy', 'yes'); 
  }
  
}