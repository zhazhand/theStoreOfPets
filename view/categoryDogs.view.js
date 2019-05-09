import {DogController} from "../controller/categoryDog.controller.js"
import {ItemView} from "../view/item.view.js"

const controller = new DogController;
const itemView = new ItemView;

export class DogCategory{
constructor(){
  this.type = 'Dog';
  this.controller = controller;
}

  render(){
    const template = document.createElement('ul');
    template.classList.add('list-group');
    let items = this.controller.define();
    for (let i = 0; i < items.length; i++) {
      let el = document.createElement('li');
      el.setAttribute('class', 'list-group-item d-flex justify-content-between');
      let span = document.createElement('span');
      span.innerText = `${i+1}. ${this.type}, color: ${items[i].color}`;
      el.appendChild(span);
      let button = document.createElement('button');
      button.setAttribute('class','btn btn-sm btn-outline-primary chooseAnimal');
      button.innerText = 'more';
      button.addEventListener('click',()=>{template.parentElement.replaceChild(itemView.render(items[i].id),template.parentElement.childNodes[0])})
      el.appendChild(button);
      template.appendChild(el);
    }
    return template;
  }
  
}