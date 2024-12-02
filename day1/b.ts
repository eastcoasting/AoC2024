//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const b = () => {
  let leftArray: number[] = [];
  let rightArray: number[] = [];
  text.split("\n").map((l: string) => {
    let [leftSource, rightSource] = l.split("  ");
    let left = +leftSource.trim();
    let right = +rightSource.trim();
    leftArray.push(left);
    rightArray.push(right);
  });

  let rightMap = new Map();

  rightArray.map((localRight) => {
    if (rightMap.has(localRight)) {
      let currentTotal = rightMap.get(localRight);
      rightMap.set(localRight, currentTotal + 1);
    } else {
      rightMap.set(localRight, 1);
    }
  });

  let result = 0;
  leftArray.map((localLeft) => {
    let pairsInRight = rightMap.get(localLeft);

    if (pairsInRight) {
      result += pairsInRight * localLeft;
    }
  });

  console.log(result);
};

b();
