const car = {
    name: "BMW",
    model: "320",
    color: "Red"
}

const carLogger = (car) => {
    console.log(`Car name is ${car.name} and model is ${car.model} and color is ${car.color}`);
}

module.exports = {car,carLogger}


