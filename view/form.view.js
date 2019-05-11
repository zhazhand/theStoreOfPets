import { Helper } from "../helper/helper.js"
import { FormController } from "../controller/form.controller.js"

const helper = new Helper;
const controller = new FormController;

export class FormView {
  render() {
    let form = document.createElement('div');
    form.classList.add('pb-3');
    form.classList.add('form-horizontal');
    form.setAttribute('name', 'structure');
    let block1 = helper.createBlock('animal', 'Choose the animal: ');
    let select1 = helper.createSelect('animal', 'cat', 'dog', 'hamster');
    select1.addEventListener('change',(target) => controller.changeAnimal(target));
    block1.lastChild.appendChild(select1);
    form.appendChild(block1);
    let block2 = helper.createBlock('anColor', 'Write the color: ');
    let input1 = helper.createInput('color', 'anColor');
    input1.addEventListener('input', controller.validText);
    block2.lastChild.appendChild(input1);
    form.appendChild(block2);
    let block3 = helper.createBlock('anCst', 'Point the cost: ');
    let input2 = helper.createInput('price', 'anCst');
    input2.addEventListener('input', controller.validPrice);
    block3.lastChild.appendChild(input2);
    form.appendChild(block3);
    let block4 = helper.createBlock('anNm', 'Point the name: ');
    let input3 = helper.createInput('name', 'anNm');
    input3.addEventListener('input', controller.validText);
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
    button.addEventListener('click', () => {
      controller.sendData(select1, select2, input1, input2, input3);
    });
    div2.appendChild(button);
    let button2 = document.createElement('button');
    button2.setAttribute('class', 'btn btn-success');
    button2.innerText = 'Close';
    div2.appendChild(button2);
    button2.addEventListener('click', () => {controller.closeForm()});
    let p = document.createElement('p');
    p.setAttribute('class','text-danger pl-5 ml-5');
    p.innerText = '*All fields are required!';
    form.appendChild(p);
    return form;
  }



}