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
  async getList(){
    const response = await fetch('./assets/pets.json');
    const data = await response.json();
    sessionStorage.setItem('allPets',JSON.stringify(data));
  }
}