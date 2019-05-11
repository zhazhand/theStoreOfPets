import { CatController } from "../controller/categoryCat.controller.js"

const controller = new CatController;

export class CatCategory {
constructor(){
  this.type = 'cat';
}

render(){
  const template = document.createElement('ul');
  template.classList.add('list-group');
  let items = controller.define();
  for (let i = 0; i < items.length; i++) {
    let el = document.createElement('li');
    el.setAttribute('class', 'list-group-item d-flex justify-content-between');
    let p = document.createElement('p');
    p.classList.add('mb-0');
    p.innerHTML = `${i+1}. Type of animal: <span class="font-weight-bold">${this.type}</span>.
     Name: ${items[i].name}, type of fur: ${items[i].isFluffy}, color: ${items[i].color}, price: ${items[i].price}$`;
    el.appendChild(p);
    let button = document.createElement('button');
    button.setAttribute('class','btn btn-sm btn-outline-primary');
    button.innerText = 'buy';
    button.addEventListener('click',()=>{controller.tryToBuy(items[i].id)})
    el.appendChild(button);
    template.appendChild(el);
  }
  return template;
}  
}