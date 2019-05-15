import { Hamster } from "./hamster.model.js";
import { Dog } from "./dog.model.js";
import { Cat } from "./cat.model.js";

export class PetShopModel{
  constructor(data){
    this.data = data;
    this.store = this.define(this.data);
  }

  define(data){
    let store = {};
    store.pets = [];
    store.cart = [];
    data.forEach(element => {
      let item;
      if(!element.name){
        item = new Hamster(element.color, element.price, element.isFluffy);
        item.type = 'hamster';
      } else if (!element.isFluffy){
        item = new Dog(element.color, element.price, element.name);
        item.type = 'dog';
      } else {
        item = new Cat(element.color, element.price, element.name, element.isFluffy);
        item.type = 'cat';
      }
      store.pets.push(item);
    });
    return store;
  }


}