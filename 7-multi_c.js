// Access the first command-line argument.
const arg = process.argv[2];

const x = parseInt(arg);
let finalOutput = "";
if (isNaN(x)) {
  finalOutput = "Missing number of occurrences";
  console.log(finalOutput);
} else {
  if (x > 0) {
    finalOutput = "C is fun";

    for (let i = 1; i < x; i++) {
      finalOutput += "\nC is fun";
    }
  }

  console.log(finalOutput);
}
