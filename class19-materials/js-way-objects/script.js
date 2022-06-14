/* Improve our example RPG program to add an experience
property named xp to the character. Its initial value is
0. Experience must appear in character description. */

const aurora = {
  name: 'Aurora',
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
};

aurora.health -= 20;

aurora.strength += 10;

aurora.xp += 15;

console.log(aurora.describe());

/* Complete the following program to add the dog object
definition. */

const dog = {
  name: 'Fang',
  species: 'boarhound',
  size: 75,
  bark() {
    return 'Grrr! Grrr!';
  }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/* Complete the following program to add the circle
object definition. Its radius value is input by the
user. */

const r = Number(prompt('Enter the circle radius:'));

const circle = {
  radius: r,
  circumference() {
    return 2 * Math.PI * this.radius;
  },
  area() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/* Write a program that creates an account object with the
following characteristics:
- A name property set to "Alex"
- A balance property set to 0
- A credit method adding the value passed as an argument to the account balance
- A describe method returning the account description
Use this object to show its description, crediting 250,
debiting 80, then show its description again. */

const account = {
  name: 'Alex',
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    return `owner: ${this.name}, balance ${this.balance}`;
  }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());