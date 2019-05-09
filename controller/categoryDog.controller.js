export class DogController {
  
  define(){
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    return this.getDogs.filter(this.animals);
  }

  getDogs(array) {
    let dogs = array.filter(elem => !elem.isFluffy && elem.name);
    return dogs;
  }
}