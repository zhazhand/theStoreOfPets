import {Helper} from "../services/helper.service.js"
import {Cat} from "../model/cat.model.js"
import {Dog} from "../model/dog.model.js"
import {Hamster} from "../model/hamster.model.js"

const helper = new Helper;

export class FormView {
  render() {
    let form = document.createElement('div');
    form.classList.add('form-horizontal');
    form.setAttribute('name', 'structure');
    let block1 = helper.createBlock('animal', 'Choose the animal: ');
    let select1 = helper.createSelect('animal', 'cat', 'dog', 'hamster');
    block1.lastChild.appendChild(select1);
    form.appendChild(block1);
    let block2 = helper.createBlock('anColor', 'Write the color: ');
    let input1 = helper.createInput('color', 'anColor');
    input1.addEventListener('input', this.validText);
    block2.lastChild.appendChild(input1);
    form.appendChild(block2);
    let block3 = helper.createBlock('anCst', 'Point the cost: ');
    let input2 = helper.createInput('price', 'anCst');
    input2.addEventListener('input', this.validPrice);
    block3.lastChild.appendChild(input2);
    form.appendChild(block3);
    let block4 = helper.createBlock('anNm', 'Point the name: ');
    let input3 = helper.createInput('name', 'anNm');
    input3.addEventListener('input', this.validText);
    block4.lastChild.appendChild(input3);
    form.appendChild(block4);
    let block5 = helper.createBlock('fur', 'Point the type of fur: ');
    let select2 = helper.createSelect('fur', 'short', 'middle', 'long');
    block5.lastChild.appendChild(select2);
    form.appendChild(block5);
    let div = document.createElement('div');
    div.classList.add('row');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'col-9 d-flex justify-content-end');
    div.appendChild(div2);
    form.appendChild(div);
    let button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary mr-2');
    button.innerText = 'Add animal';
    button.addEventListener('mouseover', () => {
      this.mouseOver(select1, input1, input2, input3)
    });
    button.addEventListener('mouseout', () => {
      this.mouseOut(input1, input2, input3)
    });
    button.addEventListener('click', (e) => {
      this.checkStatus(input1, input2, input3, e);
      this.sendData(select1, select2, input1, input2, input3);
    });
    div2.appendChild(button);
    let button2 = document.createElement('button');
    button2.setAttribute('class', 'btn btn-success');
    button2.innerText = 'Close';
    div2.appendChild(button2);
    button2.addEventListener('click', () => {
      form.parentElement.innerHTML = ''
    });
    return form;
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

  mouseOver(par1, par2, par3, par4) {
    switch (par1.value) {
      case 'dog':
        par2.style.background = par2.value ? 'inherit' : 'pink';
        par3.style.background = par3.value ? 'inherit' : 'pink';
        par4.style.background = par4.value ? 'inherit' : 'pink';
        break;
      case 'cat':
        par2.style.background = par2.value ? 'inherit' : 'pink';
        par3.style.background = par3.value ? 'inherit' : 'pink';
        par4.style.background = par4.value ? 'inherit' : 'pink';
        break;
      case 'hamster':
        par2.style.background = par2.value ? 'inherit' : 'pink';
        par3.style.background = par3.value ? 'inherit' : 'pink';
        par4.style.background = par4.value ? 'pink' : 'inherit';
        break;
    }
  }

  mouseOut(par2, par3, par4) {
    par2.style.background = 'inherit';
    par3.style.background = 'inherit';
    par4.style.background = 'inherit';
  }

  checkStatus(par1, par2, par3, e) {
    if (par1.style.background === 'pink'|| par2.style.background === 'pink'|| par3.style.background === 'pink'){
      e.target.setAttribute('data-send', 'open');
    } else {
      e.target.setAttribute('data-send', 'close');
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
        item = new Dog(color, price, name);
        break;
      case 'cat':
        item = new Cat(color, price, name, fur);
        break;
      case 'hamster':
        item = new Hamster(color, price, fur);
        break;
    }
    let array = JSON.parse(sessionStorage.getItem('allPets')) ? JSON.parse(sessionStorage.getItem('allPets')) : [];
    array.push(item);
    sessionStorage.setItem('allPets', JSON.stringify(array));
  }

}