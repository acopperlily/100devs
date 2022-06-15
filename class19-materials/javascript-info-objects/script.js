/* Write the code, one line for each action:
- Create an empty object user
- Add the property name with the value John
- Add the property surname with the value Smith
- Change the value of the name to Pete
- Remove the property name from the object */

let user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

/* Write the function isEmpty(obj) which returns true if
the object has no properties, false otherwise. */

let schedule = {};

function isEmpty(obj) {
  for (let prop in obj) return false;
  return true;
}

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));

/* Write the code to sum all salaries and store in the
variable sum. Should be 390 in the example. If salaries
is empty, then the result must be 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let salary in salaries) sum += salaries[salary];
console.log(sum);

/* Create a function multiplyNumeric(obj) that multiplies
all numeric property values of obj by 2. Please note that
multiplyNumeric does not need to return anything. It
should modify the object in-place. */

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);