import {HamsterController} from "../controller/categoryHamster.controller.js"
import { DogCategory } from "./categoryDogs.view.js";

const controller = new HamsterController;

export class HamsterCategory extends DogCategory {
  constructor() {
    super();
    this.type = 'Hamster';
    this.controller = controller;
  }

}