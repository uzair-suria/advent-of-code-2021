const fs = require("fs");
const { cpuUsage } = require("process");

const dataInput = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const input = dataInput.split("\n").map((value) => parseInt(value));

const slidingWindow = input
  .map((_, i, array) => {
    if (i < array.length - 2) {
      return array[i] + array[i + 1] + array[i + 2];
    }
  })
  .filter((item) => item !== undefined);

let slidingCount = 0;
for (let i = 1; i < slidingWindow.length; i++) {
  const curr = slidingWindow[i];
  const prev = slidingWindow[i - 1];

  if (curr > prev) slidingCount++;
}

console.log(slidingCount);
