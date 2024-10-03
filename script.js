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
let dyncmicOutput = 0;

// debugger;
inc.addEventListener("click", () => {
  const output = parseInt(outputvalue.innerText);
  let inputvalue = parseInt(input.value);

  if (inputvalue === 0 || isNaN(inputvalue)) {
    outputvalue.innerText = "please Enter Input value";
    outputvalue.style.fontSize = "22px";
  } else {
    dyncmicOutput = dyncmicOutput + inputvalue;
    outputvalue.innerText = dyncmicOutput;
  }
});
dec.addEventListener("click", () => {
  const output = parseInt(outputvalue.innerText);
  const inputvalue = parseInt(input.value);
  if (isNaN(inputvalue) || inputvalue === 0) {
    outputvalue.innerText = "please Enter Input value";
    outputvalue.style.fontSize = "22px";
  } else {
    dyncmicOutput = dyncmicOutput - inputvalue;
    outputvalue.innerText = dyncmicOutput;
  }
});

reset.addEventListener("click", () => {
  outputvalue.innerText = 0;
  input.value = 1;
});
