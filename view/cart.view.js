import {CartController} from "../controller/cart.controller.js"

const cartController = new CartController;

export class CartView {
  render(){
    const array = cartController.getAll();
    let button = document.createElement('button');
    button.setAttribute('class', 'delItem h-100');
    let img = document.createElement('img'); 
    img.setAttribute('src', './assets/close.png');
    img.classList.add('h-100');
    button.appendChild(img);
    let ul = document.createElement('ul');
    ul.setAttribute('class','list-group cart-group');
    for (let i = 0; i < array.length; i++) {
      let li = document.createElement('li');
      if(!array[i].name){
        li.innerText = `${i + 1}. Hamster: ${array[i].color}, fur - ${array[i].isFluffy}, ${array[i].price}$`;
      } else if(!array[i].isFluffy){
        li.innerText = `${i + 1}. Dog: ${array[i].color}, name - ${array[i].name}, ${array[i].price}$`;
      } else {
        li.innerText = `${i + 1}. Cat: ${array[i].color}, name - ${array[i].name}, fur - ${array[i].isFluffy}, ${array[i].price}$`;
      }
      let but = button.cloneNode(true);
      li.appendChild(but);
      ul.appendChild(li);
    }
    let mainDiv = document.createElement('div');
    mainDiv.appendChild(ul);
    let div = document.createElement('div');
    div.setAttribute('class', 'd-flex justify-content-between pt-2');
    let but1 = document.createElement('button');
    but1.innerText = 'confirm';
    but1.setAttribute('class', 'btn btn-primary btn-sm');
    but1.setAttribute('data-sold', 'no');
    but1.addEventListener('click', (e) => {this.confirm(e)})
    div.appendChild(but1);
    let but2 = document.createElement('button');
    but2.innerText = 'cancel';
    but2.setAttribute('class', 'btn btn-danger btn-sm');
    but2.setAttribute('data-cancel', 'no');
    but2.addEventListener('click', (e) => {this.cancel(e)})
    div.appendChild(but2);
    mainDiv.appendChild(div);
    return mainDiv;
  }

  confirm(e){
    cartController.confirmBuying();
    e.target.setAttribute('data-sold', 'yes');
  }

  cancel(e){
    cartController.cancelBuying();
    e.target.setAttribute('data-cancel', 'yes');
  }
}

