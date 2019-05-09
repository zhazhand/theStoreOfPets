
export class ItemController{
  getItem(index){
    let animals = JSON.parse(sessionStorage.getItem('allPets'));
    let pet = animals.find((el) => el.id === index);
    pet.type = this.defineType(pet);
    return pet;
  }
  defineType(element){
    if(element.name && !element.fluffy){
      element.type = 'dog';
    } else if(element.name && element.fluffy){
      element.type = 'cat';
    } else {
      element.type = 'hamster';
    }
    return element.type;
  }
}