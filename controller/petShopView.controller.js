import { Helper } from "../helper/helper.js"
import { Cat } from "../model/cat.model.js";

const helper = new Helper;

export class PetShopView {

  define(data) {
    let result = {};
    this.animals = data;
    result.cats = this.getCats(this.animals);
    result.fluffy = this.getWhiteOrFluffy(this.animals);
    result.priceGreaterAverage = this.getPriceGreater(this.animals);
    return result;
  }
  
  getCats(array) {
    return array.filter(elem => elem instanceof Cat);
  }

  getWhiteOrFluffy(array) {
    return array.filter(elem => elem.isFluffy === 'long' || elem.color === 'white');
  }

  getPriceGreater(array) {
    return array.filter(elem => elem.price > helper.average(this.animals));
  }
}