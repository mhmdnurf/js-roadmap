// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// sets rabbit.[[Prototype]] = animal
// rabbit.__proto__ = animal;

// properti animal bisa diakses melalui rabbit
// console.log(rabbit.eats);

// memanggil dengan method
let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
    console.log("Animal sleep");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.walk();

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected
