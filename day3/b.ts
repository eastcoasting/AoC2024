//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const b = () => {
  let result = 0;
  let enabled = true;

  let potentialParts = text.split("mul");
  potentialParts.map((part: string) => {
    let dontMatchIndex = 0;
    let doMatchIndex = 0;

    let partChars = part.split("");

    let indexDosArray = [];
    let indexDontsArray = [];

    if (part.includes("(") && part.includes(")")) {
      let partPotentialProducts = part.split(")").at(0);

      if ("(" === partPotentialProducts?.at(0)) {
        let products = part.replace("(", "").split(",");
        let potentialFirst = products.at(0);
        let potentialSecond = products.at(1)?.split(")").at(0);

        if (
          potentialFirst &&
          typeof +potentialFirst === "number" &&
          potentialSecond &&
          typeof +potentialSecond === "number"
        ) {
          let first = +potentialFirst;
          let second = +potentialSecond;

          if (!isNaN(first) && !isNaN(second) && enabled) {
            result += first * second;
          }
        }
      }
    }

    for (let i = 0; i < partChars.length; i++) {
      const char = partChars[i];

      if (char === "d") {
        dontMatchIndex = 1;
        doMatchIndex = 1;
      } else {
        if (dontMatchIndex === 0 && doMatchIndex === 0) {
        } else {
          if (dontMatchIndex === 1 && doMatchIndex === 1 && char === "o") {
            dontMatchIndex = 2;
            doMatchIndex = 2;
            continue;
          }
          if (dontMatchIndex === 2 && doMatchIndex === 2 && char === "(") {
            dontMatchIndex = 0;
            doMatchIndex = 3;
            continue;
          }
          if (dontMatchIndex === 0 && doMatchIndex === 3 && char === ")") {
            dontMatchIndex = 0;
            doMatchIndex = 0;
            // DO!
            enabled = true;
            indexDosArray.push(i);
            continue;
          }
          if (dontMatchIndex === 2 && doMatchIndex === 2 && char === "n") {
            dontMatchIndex = 3;
            doMatchIndex = 0;
            continue;
          }
          if (dontMatchIndex === 3 && doMatchIndex === 0 && char === "'") {
            dontMatchIndex = 4;
            doMatchIndex = 0;
            continue;
          }

          if (dontMatchIndex === 4 && doMatchIndex === 0 && char === "t") {
            dontMatchIndex = 5;
            doMatchIndex = 0;
            continue;
          }
          if (dontMatchIndex === 5 && doMatchIndex === 0 && char === "(") {
            dontMatchIndex = 6;
            doMatchIndex = 0;
            continue;
          }
          if (dontMatchIndex === 6 && doMatchIndex === 0 && char === ")") {
            dontMatchIndex = 0;
            doMatchIndex = 0;
            // DONT!
            enabled = false;
            indexDontsArray.push(i);
            continue;
          } else {
            doMatchIndex = 0;
            dontMatchIndex = 0;
            continue;
          }
        }
      }
    }
  });
  console.log(result);
};

b();
