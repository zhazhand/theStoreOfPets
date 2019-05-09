import {DogController} from "../controller/categoryDog.controller.js"

const controller = new DogController;

export class DogCategory{
constructor(){
  const template = document.createElement('ul');
  template.classList.add('list-group');
  this.template = template;
}

  render(){

  }
}