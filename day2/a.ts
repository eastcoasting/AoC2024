//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const a = () => {
  let result = 0;
  text.split("\n").map((report: string) => {
    let reportSource: number[] = report.split(" ").map((d) => {
      return +d;
    });

    let localRunDistances: number[] = [];

    reportSource.map((level, idx) => {
      if (reportSource.length - 1 > idx) {
        localRunDistances.push(+level - +reportSource[idx + 1]);
      }
    });

    let distancePasses = localRunDistances.every((d) => {
      return [-1, -2, -3, 1, 2, 3].includes(d);
    });

    if (distancePasses) {
      let directionPassesAsc = localRunDistances.every((d) => {
        return d > 0
      });

      let directionPassesDesc = localRunDistances.every((d) => {
        return d < 0
      });

      if (directionPassesAsc || directionPassesDesc) {
        result += 1;
      }
    }
  });

  console.log(result);
};

a();
