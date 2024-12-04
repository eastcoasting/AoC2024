//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const XMAS = ["X", "M", "A", "S"];
let XMASMATCH: string[] = [];
let result = 0;

const checkMatch = (
  cell: string,
  column: number,
  columnSource: string[],
  direction: number
) => {
  if (
    XMASMATCH.length === 0 &&
    cell === "X" &&
    columnSource[column + direction] === "M"
  ) {
    XMASMATCH.push(cell);
    console.log("we added an x in the first position");
    return;
  }
  if (XMASMATCH.length === 1 && cell === "M") {
    XMASMATCH.push(cell);
    return;
  }
  if (XMASMATCH.length === 2 && cell === "A") {
    XMASMATCH.push(cell);
    return;
  }
  if (XMASMATCH.length === 3 && cell === "S") {
    console.log("found xmas", XMASMATCH, "at index", column);
    XMASMATCH = [];
    result += 1;
    return;
  } else if (XMASMATCH.length !== 0) {
    XMASMATCH = [];
    console.log("we reset the traver");
    return;
  }
};

const a = () => {
  let dataArray: string[][] = [];
  text.split("\n").map((r: string) => {
    let localRow: string[] = [];
    r.split("").map((c) => {
      localRow.push(c);
    });

    dataArray.push(localRow);
  });

  // vertical <-

  // horizontal ->
  for (let row = 0; row < dataArray.length; row++) {
    const columnSource = dataArray[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];
      checkMatch(cell, column, columnSource, 1);
    }
  }

  // horizontal <-
  for (let row = 0; row < dataArray.length; row++) {
    const columnSource = dataArray[row];

    for (let column = columnSource.length; column >= 0; column--) {
      const cell = columnSource[column];
      checkMatch(cell, column, columnSource, -1);
    }
  }
  // vertical flip array
  let verticalDataArray: string[][] = [...Array(dataArray.at(0)!.length)].map(
    (x) => []
  );
  dataArray.map((row, _) => {
    row.map((cell, cellIDX) => {
      verticalDataArray.at(cellIDX)?.push(cell);
    });
  });

  verticalDataArray.map((d) => {
    console.log(d);
  });

  // vertical ↓
  for (let row = 0; row < verticalDataArray.length; row++) {
    const columnSource = verticalDataArray[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];
      checkMatch(cell, column, columnSource, 1);
    }
  }

  // vertical ↑
  for (let row = 0; row < verticalDataArray.length; row++) {
    const columnSource = verticalDataArray[row];

    for (let column = columnSource.length; column >= 0; column--) {
      const cell = columnSource[column];
      checkMatch(cell, column, columnSource, -1);
    }
  }

  function getAllDiagonalsTopLeftBottomRight(matrix: string[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const diagonals = [];

    // Top-left to bottom-right diagonals
    for (let d = 0; d < rows + cols - 1; d++) {
      let diagonal = [];
      for (let i = 0; i < rows; i++) {
        let j = d - i;
        if (j >= 0 && j < cols) {
          diagonal.push(matrix[i][j]);
        }
      }
      if (diagonal.length) diagonals.push(diagonal);
    }

    return diagonals;
  }

  function getAllDiagonalsTopRightBottomLeft(matrix: string[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const diagonals = [];

    // Top-right to bottom-left diagonals
    for (let d = 0; d < rows + cols - 1; d++) {
      let diagonal = [];
      for (let i = 0; i < rows; i++) {
        let j = cols - 1 - (d - i);
        if (j >= 0 && j < cols) {
          diagonal.push(matrix[i][j]);
        }
      }
      if (diagonal.length) diagonals.push(diagonal);
    }

    return diagonals;
  }

  let dataArrayDiagonalsTopRightBottomLeft =
    getAllDiagonalsTopRightBottomLeft(dataArray);

  let dataArrayDiagonalsReversedTopRightBottomLeft = structuredClone(
    dataArrayDiagonalsTopRightBottomLeft
  ).map((array) => {
    return array.toReversed();
  });

  dataArrayDiagonalsTopRightBottomLeft.map((d) => {
    console.log(d);
  });

  for (let row = 0; row < dataArrayDiagonalsTopRightBottomLeft.length; row++) {
    const columnSource = dataArrayDiagonalsTopRightBottomLeft[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];

      console.log(cell);
      checkMatch(cell, column, columnSource, 1);
    }
  }

  for (
    let row = 0;
    row < dataArrayDiagonalsReversedTopRightBottomLeft.length;
    row++
  ) {
    const columnSource = dataArrayDiagonalsReversedTopRightBottomLeft[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];

      console.log(cell);
      checkMatch(cell, column, columnSource, 1);
    }
  }
  /////////

  let dataArrayDiagonalsTopLeftBottomRight =
    getAllDiagonalsTopLeftBottomRight(dataArray);

  let dataArrayDiagonalsReversedTopLeftBottomRight = structuredClone(
    dataArrayDiagonalsTopLeftBottomRight
  ).map((array) => {
    return array.toReversed();
  });

  for (let row = 0; row < dataArrayDiagonalsTopLeftBottomRight.length; row++) {
    const columnSource = dataArrayDiagonalsTopLeftBottomRight[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];

      console.log(cell);
      checkMatch(cell, column, columnSource, 1);
    }
  }

  for (
    let row = 0;
    row < dataArrayDiagonalsReversedTopLeftBottomRight.length;
    row++
  ) {
    const columnSource = dataArrayDiagonalsReversedTopLeftBottomRight[row];

    for (let column = 0; column < columnSource.length; column++) {
      const cell = columnSource[column];

      console.log(cell);
      checkMatch(cell, column, columnSource, 1);
    }
  }

  console.log("\n\n\n\nresult is: ", result);
};

a();
