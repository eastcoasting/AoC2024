//@ts-expect-error local files
import text from "./input.txt";
// import text from "./example.txt";

const b = () => {
  let result = 0;

  const isSafe = (array: number[]): boolean => {
    const differences = array
      .map((level, idx) =>
        idx < array.length - 1 ? level - array[idx + 1] : undefined
      )
      .filter((d) => d !== undefined);

    const allIncreasing = differences.every((diff) => diff > 0 && diff <= 3);
    const allDecreasing = differences.every((diff) => diff < 0 && diff >= -3);

    return allIncreasing || allDecreasing;
  };

  const isSafeWithDampener = (array: number[]): boolean => {
    for (let i = 0; i < array.length; i++) {
      const modifiedArray = [...array];
      modifiedArray.splice(i, 1);
      if (isSafe(modifiedArray)) {
        return true;
      }
    }
    return false;
  };

  text.split("\n").forEach((report: string) => {
    const reportSource = report.split(" ").map(Number);

    if (isSafe(reportSource)) {
      result++;
      return;
    }
    if (isSafeWithDampener(reportSource)) {
      result++;
    }
  });

  console.log(result);
};

b();
