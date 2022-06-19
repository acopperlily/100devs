// Compare this procedural program...

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

console.log(getWage(baseSalary, overtime, rate));

// ...to OOP encapsulation

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
console.log(employee.getWage());

// Object
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     console.log('draw');
//   }
// }; 

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

// Constructor function
function Circle(radius) {
  // console.log(this);
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// const Circle1 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// `);

// const circle1 = new Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

// let ex = new Object();
let ex = {};

// independent values, copied by value
let x = 10;
let y = x;
x = 20;

// reference values, point to same obj in memory
let xx = { value: 10 };
let yy = xx;
xx.value = 20;

let number = 10;
function increase(number) {
  number++; // local scope
}

increase(number); // pass by value
console.log(number); // global value

let obj = { value: 10 };
function increaseObj(obj) {
  obj.value++; // reference value
}

increaseObj(obj); // pass by reference
console.log(obj); // points to same obj 

const circle2 = new Circle(10)

circle.location = { x: 1};
// Bracket notation:
const propertyName = 'center-location';
circle[propertyName] = { x: 1 }; // use for special chars

delete circle.location;

for (let key in circle) {
  console.log(key, circle[key]);
}