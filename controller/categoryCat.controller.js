export class CatController {
  
  define(){
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    return this.getItems(this.animals);
  }

  getItems(array) {
    let cats = array.filter(elem => elem.isFluffy && elem.name);
    return cats;
  }
}