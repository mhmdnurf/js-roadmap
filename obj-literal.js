// deklarasi objek literal
let user = {
  name: "Zaka",
  age: 23,
};

// mengubah object literal ke string JSON
let userJSON = JSON.stringify(user);
console.log(userJSON);

// looping object literal
for (let data in user) {
  console.log(data + ": " + user[data]);
}
