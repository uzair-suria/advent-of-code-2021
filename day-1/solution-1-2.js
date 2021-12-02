const fs = require("fs");

const dataInput = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const slidingWindow = dataInput
  .split("\n")
  .map((_, i, array) => {
    return parseInt(array[i]) + parseInt(array[i + 1]) + parseInt(array[i + 2]);
  })
  .filter((item) => item !== undefined);

let slidingCount = 0;
for (let i = 1; i < slidingWindow.length; i++) {
  if (slidingWindow[i] > slidingWindow[i - 1]) slidingCount++;
}

console.log(slidingCount);
