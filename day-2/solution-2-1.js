const fs = require("fs");
const position = {
  forward: 0,
  depth: 0,
};
const dataInput = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const input = dataInput
  .split("\n")
  .map((instruction) => instruction.split(" "))
  .map((arr) => [arr[0], parseInt(arr[1])]);

for (let i = 0; i < input.length; i++) {
  const instruction = input[i];
  switch (instruction[0]) {
    case "forward":
      position.forward += instruction[1];
      break;
    case "down":
      position.depth += instruction[1];
      break;

    case "up":
      position.depth -= instruction[1];
      break;
    default:
      break;
  }
}

console.log(position, position.forward * position.depth);
