
function paySalary(name, sales) {
	const FIXED = 25000;
	const PERCENT = 0.1;
	let bonus = 0;
	if (sales >= 100000) {
	  bonus = 10000;
	}
	let salary = FIXED + sales * PERCENT + bonus;
	console.log("Сотрудник " + name + " получает " + salary + " руб.");
  }
  
  function sendMessage(name, message) {
	console.log("Отправитель: " + name + ". Сообщение: " + (message ? message : "( пустое сообщение )"));
  }
  
  function returnSomething() {
  }
  
  let functionResult = returnSomething();
  
  let userName = "Иван";
  
  function sayHelloToUser(userName) {
	alert("Здравствуйте, " + userName);
  }
 
  function getDoubleFunction(value) {
	let result;
	if (typeof value === "number" && !isNaN(value)) {
	  result = () => value * 2
	} else if (typeof value === "string") {
	  result = () => value + value
	} else if (typeof value === "object" && value.length) {
	  result = () => {
		value = value.map(arrayValue => arrayValue * 2);
		return value;
	  }
	} else {
	  result = () =>  "Ошибка ввода";
	}
	return result;
  }
  
  let someArray = [13, 8, 22];
  let someString = "abcd";
  let someNumber = 18;
  
  let double = getDoubleFunction(someArray);
  console.log(double());
  

  let car = {
	model: "Ford",
	year: 2018,
	signal: function() {
	  console.log("beep!");
	}
  };
  
  let propName = "model";
 
  car.color = "black";
  car.price = 800000;
  car["price"] = 800000;
  
  function presentCar(car) {
	for (let prop in car) {
	  if (typeof car[prop] !== "function") console.log(car[prop]);
	}
  }
  
  
  car.presentCar = function() {
	console.log(`Модель - ${this.model}, год выпуска - ${this.year}, цвет - ${this.color}, цена - ${this.price} руб.`);
  }
  
 
  car.makeDiscount = function(discount) {
	this.price = this.price - discount;
  }
  
  car.makeDiscount(50000);
  
  function Car(model, year, color, price) {
	this.model = model;
	this.year = year;
	this.color = color;
	this.price = price;
	this.signal = function() {
	  console.log("beep!");
	}
	this.presentCar = function() {
	  console.log(`Модель - ${this.model}, год выпуска - ${this.year}, цвет - ${this.color}, цена - ${this.price} руб.`);
	}
	this.makeDiscount = function(discount) {
	  this.price = this.price - discount;
	}
  }
  
  let car2 = new Car("Audi", 2019, "white", 1200000);
 
  let employeePrototype = {
	company: "Apple",
	region: "California"
  };
  
  let manager = Object.create(employeePrototype);
  manager.name = "Steve";
  manager.job = "Manager";
  manager.company = "Google";
  manager.introduce = function() {
	console.log(`Меня зовут ${this.name}, я работаю на должности ${this.job} в компании ${this.company}`);
  }
  
  
  
  let dragonProto = {
	cave: [],
	fillCave: function(item) {
	  this.cave.push(item);
	},
	openCave: function() {
	  console.log(this.cave);
	}
  }
  
  let yellowDragon = Object.create(dragonProto);
  yellowDragon.cave = [];
  let redDragon = Object.create(dragonProto);
  redDragon.cave = [];
  
  yellowDragon.fillCave("gold");
  

  
  class Student {
	constructor(name, group) {
	  this.name = name;
	  this.group = group;
	}
	
	introduce() {
	  console.log(`Hello! My name is ${this.name}.`);
	}
  }
  
  console.log(typeof Student); 
  
  
  class Polygon {
	constructor(width, height) {
	  this.width = width;
	  this.height = height;
	}
	
	countArea() {
	  return this.width * this.height;
	}
  }
  
  class Square extends Polygon {
	constructor(length) {
	  super();
	  this.width = length;
	  this.height = length;
	}
  }
  

  let timeoutId = setTimeout(() => {
	console.log("hello");
  }, 5000);
  
  clearTimeout(timeoutId);
  
  let intervalId = setInterval(() => {
	let i = 0;
	while (i < 3) {
	  console.log("tick");
	  i++;
	}
	clearInterval(intervalId);
  }, 1000);