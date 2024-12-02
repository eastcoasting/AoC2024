// //@ts-expect-error local files
// import text from "./example.txt";
// // import text from "./input.txt";

// const validDistance = (current: number, next: number) => {
//   return [-1, -2, -3, 1, 2, 3].includes(current - next);
// };

// const evaluateReport = (reportSource: number[]) => {
//   let localRunDistances: number[] = [];

//   reportSource.map((level, idx) => {
//     if (reportSource.length - 1 > idx) {
//       localRunDistances.push(level - reportSource[idx + 1]);
//     }
//   });

//   console.log(localRunDistances);

//   let directionPassesAsc = localRunDistances.filter((d) => {
//     return d < 0;
//   }).length;

//   let directionPassesDesc = localRunDistances.filter((d) => {
//     return d > 0;
//   }).length;

//   let direction = directionPassesAsc > directionPassesDesc ? "asc" : "desc";

//   let localReportCopy = structuredClone(reportSource);
//   let validPasses = localReportCopy.filter((d, idx) => {
//     return (
//       validDistance(d, localReportCopy[idx + 1]) ||
//       localReportCopy[idx + 1] === undefined
//     );
//   });

//   let passesImmediately = false;

//   if (direction === "asc") {
//     if (
//       localRunDistances.every((d) => {
//         return d < 0;
//       }) &&
//       localRunDistances.every((d) => {
//         return [-1, -2, -3, 1, 2, 3].includes(d);
//       })
//     ) {
//       passesImmediately = true;
//     }
//   } else {
//     if (
//       localRunDistances.every((d) => {
//         return d > 0;
//       }) &&
//       localRunDistances.every((d) => {
//         return [-1, -2, -3, 1, 2, 3].includes(d);
//       })
//     ) {
//       passesImmediately = true;
//     }
//   }

//   if (!passesImmediately) {
//     localrun
//   }
// };

// const b = () => {
//   let result = 0;
//   text.split("\n").map((report: string) => {
//     let reportSource: number[] = report.split(" ").map((d) => {
//       return +d;
//     });
//     evaluateReport(reportSource);
//   });
// };

// b();
