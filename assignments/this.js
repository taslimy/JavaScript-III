/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Allows us to reuse functions
 * 2. 'This' works when a function is invoked
 * 3. 'This' may be differnt when a function is called
 * 4. The object left of the dot get 'this'
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function myName(name) {
  return `My name is ${this}.`;
}
console.log(myName());
// Principle 2

// code example for Implicit Binding
// Implicit binding occurs when dot notation is used to invoke a function.
// In implicit binding, whatever is to the left of the dot becomes the context for this in the function.
let mySelf = {
  name: "Taslim",
  age: 24,
  hobby: "Sleep",
  talk: function() {
    return `${this.name} favorite hobby is to ${this.hobby} all day long.`;
  }
}; // myself
console.log(mySelf.talk());

// Principle 3

// code example for New Binding

let Animals = function(name, breed, age) {
  // creates an object in: this = {}
  this.name = name;
  this.breed = breed;
  this.age = age;
};

let cats = new Animals('Felix', 'Bengal', 3);
console.log(cats);

let dogs = new Animals('Water', 'Hound', 3);
console.log(dogs);

// Principle 4

// code example for Explicit Binding
let animalsList = function(color1, color2, color3) {
  console.log("The cat name is " + this.name + ' and his colors are ' + color1 + ', ' + color2 + ', ' + color3);
};

let felix = {
  name: "Felix",
  breed: "bengal"
};

let colors = ['red', 'blue', 'green'];

animalsList.call(felix, colors[0], colors[1], colors[2]); // .call() my cats name. it works!!
