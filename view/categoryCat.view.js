import { CatController } from "../controller/categoryCat.controller.js"
import { DogCategory } from "./categoryDogs.view.js";

const controller = new CatController;

export class CatCategory extends DogCategory{
constructor(){
  super();
  this.type = 'Cat';
  this.controller = controller;
}
  
}