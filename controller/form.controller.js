import { Cat } from "../model/cat.model.js"
import { Dog } from "../model/dog.model.js"
import { Hamster } from "../model/hamster.model.js"
import { Banner } from "../view/banner.view.js"

const banner = new Banner;

export class FormController {
  constructor(){
    this.parent = document.querySelector('.viewContainer');
  }
  changeAnimal(el) {
    let element = el.target.parentElement.parentElement.parentElement;
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].style.display = '';  
    }
    if (el.target.value === 'dog') {
      element.children[4].style.display = 'none';
    }else if(el.target.value === 'hamster'){
      element.children[3].style.display = 'none';
      element.children[3].lastElementChild.firstElementChild.value = '';
    }
  }
  
  validText(e) {
    let str = e.target.value;
    const pattern = /^[a-z]+-?([a-z]+)?$/i;
    if (!pattern.test(str)) {
      return e.target.value = str.slice(0, -1);
    }
  }

  validPrice(e) {
    let str = e.target.value;
    const pattern = /^\d+(\.\d{0,2})?$/;
    if (!pattern.test(str)) {
      return e.target.value = str.slice(0, -1);
    }
  }
  

  sendData(sel1,sel2,inp1,inp2,inp3){
    let color = inp1.value.toLowerCase();
    let price = inp2.value;
    let tmp = inp3.value;
    let name = tmp.slice(0, 1).toUpperCase() + tmp.slice(1).toLowerCase();
    let fur = sel2.value.toLowerCase();
    let item;
    switch (sel1.value) {
        case 'dog':
        if(this.isValid(inp1) && this.isValid(inp2, false) && this.isValid(inp3)){
          item = new Dog(color, price, name);
        }else {
          return;
        }
        break;
      case 'cat':
        if(this.isValid(inp1) && this.isValid(inp2, false) && this.isValid(inp3)){  
          item = new Cat(color, price, name, fur);
        }else {
          return;
        }
        break;
      case 'hamster':
        if(this.isValid(inp1) && this.isValid(inp2, false)){  
          item = new Hamster(color, price, fur);
        }else {
          return;
        }
        break;
    }
    let array = JSON.parse(sessionStorage.getItem('allPets')) ? JSON.parse(sessionStorage.getItem('allPets')) : [];
    array.push(item);
    sessionStorage.setItem('allPets', JSON.stringify(array));
    banner.render();
    this.closeForm();
  }

  isValid(element, pat = true){
    let tmpValue;
    let pattern = pat ? /^[a-z]+-?([a-z]+)?$/i : /^\d+(\.\d{0,2})?$/;
    if(element.value !== '' && pattern.test(element.value)){
      return true;
    }else {
      element.style.border = '3px solid red';
      element.style.color = 'red';
      tmpValue = element.value;
      element.value = ' PLEASE, FILL THIS FIELD CORRECTLY!';
      setTimeout(() => {
        element.style.border = '';
        element.style.color = '';
        element.value = tmpValue;
      }, 2000);
      return false;
    }
  }

  closeForm(){
    this.parent.innerHTML = '';
  }
}