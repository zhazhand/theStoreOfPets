export class Pet {
  constructor(color, price) {
    this.id = Date.now();
    this.color = color;
    this.price = price;
  }
}