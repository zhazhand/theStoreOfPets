import { CartController } from "../controller/cart.controller.js"

const cartController = new CartController;

export class CartView {
constructor(){
  this.container = document.querySelector('.cartContainer');
}

  render(){
    const array = cartController.getAll();
    let mainDiv = document.createElement('div');
    if (array.length === 0){
      return this.container.innerHtml = '';
    }
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
      but.children[0].addEventListener('click', (e) => {cartController.cancelOne(e, array[i].id)})
      li.appendChild(but);
      ul.appendChild(li);
    }
    mainDiv.appendChild(ul);
    let div = document.createElement('div');
    div.setAttribute('class', 'd-flex justify-content-between pt-2');
    let but1 = document.createElement('button');
    but1.innerText = 'confirm';
    but1.setAttribute('class', 'btn btn-primary btn-sm');
    but1.addEventListener('click', () => {cartController.confirmBuying()})
    div.appendChild(but1);
    let but2 = document.createElement('button');
    but2.innerText = 'cancel';
    but2.setAttribute('class', 'btn btn-danger btn-sm');
    but2.addEventListener('click', () => {cartController.cancelBuying()})
    div.appendChild(but2);
    mainDiv.appendChild(div);
    return this.container.appendChild(mainDiv);
  }

}

