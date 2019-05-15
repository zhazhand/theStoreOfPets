export class CartController{
  constructor(){
    this.container = document.querySelector('.viewContainer');
  }

  getItem(index){
    let animals = this.getAll();
    let pet = animals.find((el) => el.id === index);
    pet.type = this.defineType(pet);
    return pet;
  }

  confirmBuying(el){
    el.target.setAttribute('data-confirm', 'confirm');
  }

  cancelBuying(el){
    el.target.setAttribute('data-cancel', 'cancel');
  }

  cancelOne(e, id){
    e.target.setAttribute('data-cancel-one', id);
  }

  closeCart(){
    this.container.innerHTML = '';
  }
}