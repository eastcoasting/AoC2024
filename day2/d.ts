// //@ts-expect-error local files
// import text from "./example.txt";
// // import text from "./input.txt";

// const b = () => {
//   let result = 0;
//   text.split("\n").map((report: string) => {
//     let reportSource: number[] = report.split(" ").map((d) => {
//       return +d;
//     });

//     let localRunDistances: number[] = [];

//     reportSource.map((level, idx) => {
//       if (reportSource.length - 1 > idx) {
//         localRunDistances.push(+level - +reportSource[idx + 1]);
//       }
//     });

//     let distancePasses = localRunDistances.filter((d) => {
//       return [-1, -2, -3, 1, 2, 3].includes(d);
//     });

//     let distancePassesUsedUp = localRunDistances.length - distancePasses.length;

//     if (distancePasses.length && distancePassesUsedUp <= 2) {
//       let directionPassesAsc = distancePasses.every((d) => {
//         return d > 0;
//       });

//       let directionPassesDesc = distancePasses.every((d) => {
//         return d < 0;
//       });

//       if (directionPassesAsc || directionPassesDesc) {
//         let finalDistanceArray = [];

//         for (let i = 0; i < reportSource.length; i++) {
//           const element = reportSource[i];

//           if (
//             [-1, -2, -3, 1, 2, 3].includes(element - reportSource[i + 1]) ||
//             reportSource[i + 1] === undefined
//           ) {
//             finalDistanceArray.push(element);
//           }
//         }


//         let finalLocalRunDistances: number[] = []
//         reportSource.map((level, idx) => {
//           if (reportSource.length - 1 > idx) {
//             finalLocalRunDistances.push(+level - +reportSource[idx + 1]);
//           }
//         });
        

//         let finalDistancePasses = finalLocalRunDistances.every((d) => {
//           return [-1, -2, -3, 1, 2, 3].includes(d);
//         });

//         if (finalDistancePasses) {
//           result += 1
//         }

//         // console.log(
//         //   reportSource,
//         //   distancePasses,
//         //   distancePassesUsedUp,
//         //   localRunDistances.length,
//         //   distancePasses.length
//         // );
//       }
//     }
//   });

//   console.log(result);
// };

// b();
