//@ts-expect-error local files
// import text from "./example.txt";
import text from "./input.txt";

const a = () => {
  let result = 0;

  let potentialParts = text.split("mul");
  potentialParts.map((part: string) => {
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

          if (!isNaN(first) && !isNaN(second)) {
            result += first * second;
          }
        }
      }
    }
  });

  console.log(result);
};

a();
