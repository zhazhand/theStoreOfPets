export class HamsterController {
  
  define(){
    this.animals = JSON.parse(sessionStorage.getItem('allPets'));
    return this.getItems(this.animals);
  }

  getItems(array) {
    let hamsters = array.filter(elem => elem.isFluffy && !elem.name);
    return hamsters;
  }
}