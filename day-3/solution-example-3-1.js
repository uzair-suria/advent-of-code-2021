const fs = require("fs");
const position = {
  forward: 0,
  depth: 0,
};
const dataInput = fs
  .readFileSync("./exampleInput.txt", {
    encoding: "utf-8",
    flag: "r",
  })
  .split("\r\n")
  .map((stringNum) => [...stringNum]);

const transpose = (array) => array[0].map((x, i) => array.map((x) => x[i]));

const findMode = (array) => {
  let mapping = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!mapping[value]) {
      mapping[value] = 0;
    }
    mapping[value]++;
  }
  return mapping["1"] > mapping["0"] ? "1" : "0";
};

const transposedInput = transpose(dataInput);
const decoded = transposedInput.map(findMode);

const gamma = decoded.join("");
const gammaNum = parseInt(gamma, 2);

const epsilon = decoded.map((x) => (x == "1" ? 0 : "1")).join("");
const epsilonNum = parseInt(epsilon, 2);

console.log(gammaNum);
console.log(epsilonNum);
console.log(gammaNum * epsilonNum);
