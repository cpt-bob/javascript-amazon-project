class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk Open: ${
        this.isTrunkOpen
      }`
    );
  }

  go() {
    if (this.isTrunkOpen === false) {
      this.speed += 5;

      if (this.speed > 200) {
        this.speed = 200;
      }
    } else {
      this.speed = 0;
    }
  }

  break() {
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed > 0) {
      this.isTrunkOpen = false;
    } else {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;
  isTrunkOpen = "N/A";

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed = +this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log("Race cars do not have a trunk.");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk.");
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

console.log(car1);
console.log(car2);
console.log(raceCar);

car1.go();
car1.go();
car1.go();
car1.go();
car1.break();

car2.break();

car1.openTrunk();

car2.openTrunk();

raceCar.go();

car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();
