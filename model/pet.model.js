export class Pet {
  constructor(color, price) {
    this.id = Math.trunc(new Date().valueOf() * Math.random());
    this.color = color;
    this.price = price;
  }
}