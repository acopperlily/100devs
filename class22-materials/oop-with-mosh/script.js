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

  let defaultLocation = { x: 0, y: 0 };

  // let computeOptimumLocation = function(factor) {

  //}
  this.getDefaultLocation = function() {
    return defaultLocation;
  }

  this.draw = function() {
    // computeOptimumLocation(0.1);
    
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid location.');
      }
      defaultLocation = value;
    }
  });
}

const circle3 = new Circle(10);
// circle.computeOptimumLocation(); // nope
// circle3.defaultLocation = 1; // throws error
circle3.draw();

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

circle2.location = { x: 1};
// Bracket notation:
const propertyName = 'center-location';
// circle2[propertyName] = { x: 1 }; // use for special chars

delete circle2.location;

for (let key in circle2) {
  console.log(key, circle2[key]);
}

console.log(Object.keys(circle2));
if ('radius' in circle2) {
  console.log('Circle has a radius.');
}

function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running) {
      throw new Error('Stopwatch has already started.');
    }

    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error('Stopwatch is not started.');
    }

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch(); 
sw.start();
// sw.start(); // throw error
let count = 2000000000; // lol i had to shrink this number in codepen lololol
while (count) {
  count--;
}
sw.stop();
// sw.stop(); // throw error
console.log(sw.duration);
sw.reset();
console.log(sw.duration);