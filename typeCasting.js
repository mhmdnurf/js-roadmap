// type conversion
let x = 10;
let y = "22";
let sum = x + y;
console.log(sum);
console.log(typeof sum);

// type coercion
let a = 10;
let b = "22";
let eval = +a + +b;
console.log(eval);
console.log(typeof eval);

const conversion = isNaN(sum);
console.log(conversion);

const coercion = isNaN(eval);
console.log(coercion);

const value1 = "5";
const value2 = 9;
let ok = value1 + value2;

console.log(ok);
