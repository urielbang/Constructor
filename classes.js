class Product {
  constructor(title, price, image, disciption, quantity) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.disciption = disciption;
    this.quantity = quantity;
  }
  getPrice() {
    return this.price;
  }
}

const p1 = new Product("iphone", 500, "sdsdvv", "sabaka", 800);
console.log(p1.getPrice());

class Animal {
  constructor(name) {
    this.name = name;
  }
  sleap() {
    return "sleeping...";
  }
  eat() {
    return "eating...";
  }
  run() {
    return "running...";
  }
}

class Bird extends Animal {
  fly() {
    return "flying...";
  }
}

const bird1 = new Bird();
