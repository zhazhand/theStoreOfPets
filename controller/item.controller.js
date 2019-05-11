
export class ItemController{
  getItem(index){
    let animals = JSON.parse(sessionStorage.getItem('allPets'));
    let pet = animals.find((el) => el.id === index);
    pet.type = this.defineType(pet);
    return pet;
  }
  defineType(element){
    if(!element.name){
      element.type = 'hamster';
    } else if(!element.isFluffy){
      element.type = 'dog';
    } else {
      element.type = 'cat';
    }
    return element.type;
  }
}