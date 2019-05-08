import { PetShop } from "./petShop.model";
import { Cat } from "./cat.model.js";
import { Dog } from "./dog.model.js";
import { Hamster } from "./hamster.model.js";
import {helper, Helper} from "../services/helper.service.js"

const helper = new Helper;

export class PetShopView {

  define() {
      this.animals = sessionStorage.getItem('allPets');
      this.cats = this.getCats(this.animals);
      this.fluffy = this.getWhiteOrFluffy(this.animals);
      this.priceAv = this.getPriceGreater(this.animals);

  }
  getCats(array) {

      let cats = array.filter(elem => elem instanceof Cat);
      return cats;
  }

  getWhiteOrFluffy(array) {

      let fluffy = array.filter(elem => elem.isFluffy==='long' || elem.color === 'white');
      return fluffy;
  }

  getPriceGreater(array) {

      let priceAv = array.filter(elem => elem.price > helper.average(this.animals));
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