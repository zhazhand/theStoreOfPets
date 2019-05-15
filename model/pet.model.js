export class Pet {
  constructor(color, price) {
    this.id = Math.trunc(Date.now() * Math.random());
    this.color = color;
    this.price = price;
  }
}