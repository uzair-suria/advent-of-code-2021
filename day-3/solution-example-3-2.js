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
  .trim()
  .split("\r\n")
  .map((stringNum) => [...stringNum]);

/**
 * This function accepts an array of strings representing binary numbers. It uses the provided
 * target column to examine the digits in all binary number string at a specific position.
 *
 * This function then returns an object that maps the frequency with which each bit
 * occurs in a given column and the indices of the array at which it occures in the target
 * column.
 * @param {Array<string>} array An array of binary numbers in string type
 * @param {number} targetCol Target column
 * @returns A frequency and index mapping of occurences of "0"s and "1"s
 */
const columnFreqMapper = (array, targetCol) => {
  const colMapping = {
    "0": {
      count: 0,
      indices: [],
    },
    "1": {
      count: 0,
      indices: [],
    },
  };
  array.forEach((binaryNumber, i) => {
    let targetIndex = targetCol - 1;
    let colValue = binaryNumber[targetIndex];

    colMapping[colValue].count++;
    colMapping[colValue].indices.push(i);
  });

  return colMapping;
};
// console.log(dataInput);

const oxBitCriteria = (binaryArray, targetColumn) => {
  if (targetColumn > binaryArray[0].length) targetColumn = 1;

  if (binaryArray.length === 1) {
    // console.log("Logging from within Fn:", binaryArray[0].join(""));
    return binaryArray[0].join("");
  } else {
    const freqMap = columnFreqMapper(binaryArray, targetColumn);

    if (freqMap[1].count >= freqMap[0].count) {
      return oxBitCriteria(
        freqMap[1].indices.map((i) => binaryArray[i]),
        targetColumn + 1
      );
    } else {
      return oxBitCriteria(
        freqMap[0].indices.map((i) => binaryArray[i]),
        targetColumn + 1
      );
    }
  }
};

const co2BitCriteria = (binaryArray, targetColumn) => {
  let binaryString = "";
  if (targetColumn > binaryArray[0].length) targetColumn = 1;

  if (binaryArray.length === 1) {
    // console.log("Logging from within Fn:", binaryArray[0].join(""));
    binaryString = binaryArray[0].join("");
    return binaryArray[0].join("");
  } else {
    const freqMap = columnFreqMapper(binaryArray, targetColumn);

    if (freqMap[1].count < freqMap[0].count) {
      return co2BitCriteria(
        freqMap[1].indices.map((i) => binaryArray[i]),
        targetColumn + 1
      );
    } else {
      return co2BitCriteria(
        freqMap[0].indices.map((i) => binaryArray[i]),
        targetColumn + 1
      );
    }
  }
};

const oxGen = oxBitCriteria(dataInput, 1);
const co2Scrub = co2BitCriteria(dataInput, 1);

console.log("Life Support: ", parseInt(oxGen, 2) * parseInt(co2Scrub, 2));
