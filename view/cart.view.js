import { CartController } from "../controller/cart.controller.js"

const cartController = new CartController;

export class CartView {
constructor(){
  this.container = document.querySelector('.viewContainer');
}

  render(){
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let flexContainer = document.createElement('div');
    flexContainer.setAttribute('class', 'd-flex justify-content-center h-100');
    overlay.appendChild(flexContainer);
    let card = document.createElement('div');
    card.setAttribute('class', 'card align-self-center');
    flexContainer.appendChild(card);
    let cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'card-header position-relative');
    cardHeader.innerText = ' In your cart';
    card.appendChild(cardHeader);
    let closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'cart-over position-absolute h-100');
    closeButton.addEventListener('click', () => {cartController.closeCart()})
    cardHeader.appendChild(closeButton);
    let closeImg = document.createElement('img');
    closeImg.setAttribute('src', './assets/close.png');
    closeImg.classList.add('h-75');
    closeButton.appendChild(closeImg);
    const array = cartController.getAll();
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'card-body cartContainer');
    card.appendChild(mainDiv);
    this.container.appendChild(overlay);
    if (array.length === 0){
      return mainDiv.innerHtml = '';
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
        li.innerText = `Hamster: ${array[i].color}, fur - ${array[i].isFluffy}, ${array[i].price}$`;
      } else if(!array[i].isFluffy){
        li.innerText = `Dog: ${array[i].color}, name - ${array[i].name}, ${array[i].price}$`;
      } else {
        li.innerText = `Cat: ${array[i].color}, name - ${array[i].name}, fur - ${array[i].isFluffy}, ${array[i].price}$`;
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
    return overlay;
  }

}

