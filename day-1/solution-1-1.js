const fs = require("fs");

const dataInput = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const input = dataInput.split("\n").map((val) => parseInt(val));

let count = 0;
for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    count++;
  }
}

console.log(count);
