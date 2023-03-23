// setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, 1000);

// setTimeout(() => {
//   console.log("Delayed for 3 seconds");
// }, 3000);

// perbedaan setTimeout dan setInterval

// setTimeout(() => {
//   console.log("Ini setTimeout dengan delay 1 detik");
// }, 1000);

// setInterval(() => {
//   console.log("Ini setInterval dengan delay 3 detik");
// }, 3000);

// penggunaan callback
// const greeting = (name, callback) => {
//   console.log("Hello " + name);
//   callback();
// };

// const processUserInput = (callback) => {
//   let name = "Muhammad Zakaria";
//   callback(name);
// };

// processUserInput((result) => {
//   greeting(result, () => {
//     console.log("This is an example of a callback function.");
//   });
// });

// contoh callback hell
const firstFunction = (callback) => {
  setTimeout(() => {
    console.log("First function called");
    callback();
  }, 1000);
};

const secondFunction = (callback) => {
  setTimeout(() => {
    console.log("Second function called");
    callback();
  }, 1000);
};

const thirdFunction = (callback) => {
  setTimeout(() => {
    console.log("Third function called");
    callback();
  }, 1000);
};

firstFunction(() => {
  secondFunction(() => {
    thirdFunction(() => {
      console.log("All functions called");
    });
  });
});
