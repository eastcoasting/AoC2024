//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const XMAS = "XMAS";
let result = 0;

const checkMatch = (
  row: number,
  col: number,
  matrix: string[][],
  directionRow: number,
  directionCol: number
) => {
  for (let i = 0; i < XMAS.length; i++) {
    const newRow = row + i * directionRow;
    const newCol = col + i * directionCol;

    // Check bounds
    if (
      newRow < 0 ||
      newRow >= matrix.length ||
      newCol < 0 ||
      newCol >= matrix[0].length ||
      matrix[newRow][newCol] !== XMAS[i]
    ) {
      return false;
    }
  }
  return true;
};

const countMatches = (matrix: string[][]) => {
  const directions = [
    [0, 1], // →
    [0, -1], // ←
    [1, 0], // ↓
    [-1, 0], // ↑
    [1, 1], // ↘
    [-1, -1], // ↖
    [1, -1], // ↙
    [-1, 1], // ↗
  ];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      for (const [dr, dc] of directions) {
        if (checkMatch(row, col, matrix, dr, dc)) {
          result++;
        }
      }
    }
  }
};

const processInput = (input: string): string[][] => {
  return input.split("\n").map((line) => line.split(""));
};

const a = () => {
  const dataArray = processInput(text);
  countMatches(dataArray);
  console.log(result);
};

a();
