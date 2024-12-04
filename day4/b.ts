//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const MAS = "MAS";
let result = 0;

const checkMatch = (
  row: number,
  col: number,
  matrix: string[][],
  directionRow: number,
  directionCol: number
) => {
  for (let i = 0; i < MAS.length; i++) {
    const newRow = row + i * directionRow;
    const newCol = col + i * directionCol;

    // Check bounds
    if (
      newRow < 0 ||
      newRow >= matrix.length ||
      newCol < 0 ||
      newCol >= matrix[0].length ||
      matrix[newRow][newCol] !== MAS[i]
    ) {
      return false;
    }
  }
  return true;
};

const countMatches = (matrix: string[][]) => {
  const directions = [
    // [0, 1], // →
    // [0, -1], // ←
    // [1, 0], // ↓
    // [-1, 0], // ↑
    [1, 1], // ↘
    [-1, -1], // ↖
    [1, -1], // ↙
    [-1, 1], // ↗
  ];

  const matches = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      for (const [dr, dc] of directions) {
        if (checkMatch(row, col, matrix, dr, dc)) {
          matches.push(`${row + dr} - ${col + dc}`);
          // result++;
        }
      }
    }
  }

  let matchAMap = new Map();

  matches.map((d) => {
    if (matchAMap.has(d)) {
      matchAMap.set(d, matchAMap.get(d) + 1);
    } else {
      matchAMap.set(d, 1);
    }
  });
  console.log(
    Array.from(matchAMap).filter((d) => {
      if (d.at(1) > 1) {
        result += 1;
      }
    })
  );
};

const processInput = (input: string): string[][] => {
  return input.split("\n").map((line) => line.split(""));
};

const b = () => {
  const dataArray = processInput(text);
  countMatches(dataArray);
  console.log(result);
};

b();
