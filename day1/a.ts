//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const a = () => {
  let leftArray: number[] = [];
  let rightArray: number[] = [];
  text.split("\n").map((l: string) => {
    let [leftSource, rightSource] = l.split("  ");
    let left = +leftSource.trim();
    let right = +rightSource.trim();
    leftArray.push(left);
    rightArray.push(right);
  });

  let sortedLeft = leftArray.toSorted((a, b) => {
    return a - b;
  });
  let sortedRight = rightArray.toSorted((a, b) => {
    return a - b;
  });

  let runningTotal = 0;

  sortedLeft.map((localLeft, idx) => {
    let localRight = sortedRight[idx];

    runningTotal += Math.abs(localLeft - localRight);
  });

  console.log(runningTotal);
};

a();
