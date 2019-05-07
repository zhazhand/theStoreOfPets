import { PetShop } from "./petShop.model";
import { Cat } from "./cat.model.js";
import { Dog } from "./dog.model.js";
import { Hamster } from "./hamster.model.js";

export class PetShopView {
  constructor() {
      //this.animals = [];
      //this.cats = [];
      //this.priceAv = [];

  }
  render(animals) {
      //console.log(animals);
      this.animals = animals;
      this.cats = this.getCats();
      this.fluffy = this.getWhiteOrFluffy();
      this.priceAv = this.getPriceGreater();

  }
  getCats() {

      let cats = this.animals.filter(elem => elem instanceof Cat);
      return cats;
  }

  getWhiteOrFluffy() {

      let fluffy = this.animals.filter(elem => elem.isFluffy==='long' || elem.color === 'white');
      return fluffy;
  }

  getPriceGreater() {

      let priceAv = this.animals.filter(elem => elem.price > average(this.animals));
      return priceAv;
  }
}

function average(arr) {
  let len = arr.length,
      sum = 0;
  for (let i = 0; i < len; i++) {
      sum += parseFloat(arr[i].price);
  }
  return sum / len;
}