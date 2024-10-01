const inc = document.querySelector(".increment");
const dec = document.querySelector(".decrement");
const input = document.querySelector("input");
const reset = document.querySelector(".reset-button");
let outputvalue = document.querySelector(".counter-output");

// let output = 0;
// inc.addEventListener("click", () => {
//   output += +input.value;
//   outputvalue.textContent = output;
// });

// dec.addEventListener("click", () => {
//   output -= +input.value;
//   outputvalue.textContent = output;
// });

// reset.addEventListener("click", () => {
//   output = 0;
//   outputvalue.textContent = output;
//   input.value = 1;
// });

//* second method

inc.addEventListener("click", () => {
  const output = parseInt(outputvalue.innerText);
  const inputvalue = parseInt(input.value);
  outputvalue.innerText = output + inputvalue;
});
dec.addEventListener("click", () => {
  const output = parseInt(outputvalue.innerText);
  const inputvalue = parseInt(input.value);
  outputvalue.innerText = output - inputvalue;
});

reset.addEventListener("click", () => {
  outputvalue.innerText = 0;
  input.value = 1;
});
