const fs = require("fs");

const dataInput = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const input = dataInput.split("\n");

let count = 0;
for (let i = 1; i < input.length; i++) {
  const curr = parseInt(input[i]);
  const prev = parseInt(input[i - 1]);
  if (curr > prev) {
    count++;
    console.log(typeof curr);
    console.log(`${curr} > ${prev}, count: ${count}, index: ${i}`);
  }
}

console.log(count);
