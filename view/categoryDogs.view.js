import { DogController } from "../controller/categoryDog.controller.js"

const controller = new DogController;

export class DogCategory{

render(array){
  const template = document.createElement('ul');
  template.classList.add('list-group');
  let items = controller.getItems(array);
  for (let i = 0; i < items.length; i++) {
    let el = document.createElement('li');
    el.setAttribute('class', 'list-group-item d-flex justify-content-between');
    let p = document.createElement('p');
    p.classList.add('mb-0');
    p.innerHTML = `${i+1}. Type of animal: <span class="font-weight-bold">${items[i].type}</span>.
     Name: ${items[i].name}, color: ${items[i].color}, price: ${items[i].price}$`;
    el.appendChild(p);
    let button = document.createElement('button');
    button.setAttribute('class','btn btn-sm btn-outline-primary chooseAnimal');
    button.innerText = 'buy';
    button.addEventListener('click',(e)=>{controller.tryToBuy(items[i].id, e)})
    el.appendChild(button);
    template.appendChild(el);
  }
  return template;
}
  
}