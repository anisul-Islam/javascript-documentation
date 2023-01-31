// year%400===0 - leap year
// year%4===0 && year%100!==0 - leap year
// Not a leap year

function Student(age, country) {
  this.age = age;
  this.country = country;

  this.display1 = function display() {
    console.log(`you are ${this.age} years old`);
  };
}

const mercedez = new Student(29, 'australia');
console.log(mercedez.age);
console.log(mercedez.country);
