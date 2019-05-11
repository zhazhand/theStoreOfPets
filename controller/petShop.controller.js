export class PetShopController {
  
  constructor() {

    this.list = [];
  }
  addItem(item) {
    this.list.push(item);
  }
  delete(index) {
    this.list.splice(index,1);
  }
  getList(){
    fetch('./assets/pets.json')
    .then(response => response.json())
    .then(data => {sessionStorage.setItem('allPets',JSON.stringify(data))});
  }
}