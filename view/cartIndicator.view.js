import { CartIndicatorController } from "../controller/cartIndicator.controller.js"

const controller = new CartIndicatorController;

export class  CartIndicatorView {
  constructor(){
    this.parent = document.querySelector('.score');
  }

  render(){
    this.parent.innerText = controller.getLength() ? controller.getLength() : '';
  }
}