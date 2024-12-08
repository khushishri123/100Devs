// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// App 1:
// let counter = 1;
// function printCounter() {
//   console.clear();
//   console.log(counter);
//   counter += 1;
// }
// setInterval(printCounter, 1000);

// App 2:
let counter = 1;
function printCounter() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printCounter, 1000);
}
setTimeout(printCounter, 1000);
