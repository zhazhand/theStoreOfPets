import Pet from('./pet.model');

export class Dog extends Pet {
  constructor(color, price, name) {
    super(color, price);
    this.name = name;
  }
}