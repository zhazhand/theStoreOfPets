import { Cat } from "./cat.model.js";
import { Dog } from "./dog.model.js";
import { Hamster } from "./hamster.model.js";

export class PetShop {
  constructor() {

    this.list = [];
  }
  addItem(item) {
    this.list.push(item);
  }
  delete(index) {
    this.list.splice(index,1);
  }
}