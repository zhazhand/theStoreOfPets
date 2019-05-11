import { Helper } from "../helper/helper.js"

let helper = new Helper;

export class PetShopView {

  define() {
    let result = {};
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    result.cats = this.getCats(this.animals);
    result.fluffy = this.getWhiteOrFluffy(this.animals);
    result.priceGreaterAverage = this.getPriceGreater(this.animals);
    return result;
  }
  getCats(array) {

    let cats = array.filter(elem => elem.isFluffy && elem.name);
    return cats;
  }

  getWhiteOrFluffy(array) {

    let fluffy = array.filter(elem => elem.isFluffy === 'long' || elem.color === 'white');
    return fluffy;
  }

  getPriceGreater(array) {

    let priceAv = array.filter(elem => elem.price > helper.average(this.animals));
    return priceAv;
  }
}