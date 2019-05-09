export class DogController {
  
  define(){
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    return this.getItems(this.animals);
  }

  getItems(array) {
    let dogs = array.filter(elem => !elem.isFluffy && elem.name);
    return dogs;
  }
}