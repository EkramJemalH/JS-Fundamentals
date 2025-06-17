// Access the first command-line argument.
const arg = process.argv[2];

const x = parseInt(arg);

if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "C is fun";

  for (let i = 1; i < x; i++) {
    output += "\nC is fun";
  }

  console.log(output);
}
