console.log("tut 27");

// Object literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
}

// creating constructor for cars
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} than Mercedes`);
    }
}

let car1 = new generalCar("Nissan", 150);
console.log(car1.topSpeed);
car1.run();
car1.analyze();