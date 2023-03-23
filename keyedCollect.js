// sintaks map
// const keyCol = new Map([
//   ["name1", "Muhammad Zakaria"],
//   ["name2", "Tarisya"],
//   ["name3", "Muhammad Nurfatkhur Rahman"],
// ]);

// menambahkan value ke map
// keyCol.set("name4", "Tarisya Marufi");

// mendapatkan data spesifik pada map
// console.log(keyCol.get("name4"));

// const map = new Map();
// let obj = {
//   nama: "Muhammad Zakaria",
// };

// map.set(obj, true);

// console.log(keyCol.has("name4"));

// const name = {
//   namaDepan: "Muhammad Nurfatkhur",
//   namaBelakang: "Rahman",
// };

// const zaka = new Map([
//   ["namaDepan", "Muhammad"],
//   ["namaBelakang", "Zakaria"],
// ]);

// mengubah object menjadi map
// const nameMap = new Map(Object.entries(name));
// console.log(nameMap);

// mengubah map menjadi object
// const nameObj = Object.fromEntries(zaka);
// console.log(nameObj);

// const coffee = new Map();
// coffee.set("americano", 100);
// coffee.set("luwak", 300);
// coffee.set("espresso", 400);

// convert map ke array
// console.log(Array.from(coffee));
// console.log([...coffee]);
// console.log(coffee.size);

// remove all key-value
// coffee.clear();
// console.log(coffee.size);

// const number = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
//   [4, "four"],
//   [5, "five"],
// ]);

// const nomor = new Map([
//   [1, "satu"],
//   [2, "dua"],
//   [3, "tiga"],
// ]);

// const merge = new Map([...number, ...nomor, [1, "siji"]]);

// console.log(merge);

// contoh weakMap
// let myWeakMap = new WeakMap();
// create an object to use as a key
// let keyObject = {};

// add a key-value pair to the WeakMap
// myWeakMap.set(keyObject, "value associated with keyObject");

// retrieve the value associated with the keyObject
// let value = myWeakMap.get(keyObject);
// console.log(value);

// remove the key-value pair from the WeakMap
// myWeakMap.delete(keyObject);

// membuat Sets
// const set = new Set([1, 2, 3]);

// menambahkan data set
// set.add(4);

// loop
// for (const x of set) {
//   console.log(x);
// }

// mengubah sets menjadi array
// const arr = Array.from(set);
// console.log(arr);

// perbedaan Map dan WeakMap
// let map = new Map();
// let objc = {
//   halo: "nama",
// };
// map.set(objc, "nama");
// objc = null;
// console.log(map);

// let weakMap = new WeakMap();
// let obj = {
//   halo: "nama",
// };
// weakMap.set(obj, "nama");
// obj = null;
// console.log(weakMap);
