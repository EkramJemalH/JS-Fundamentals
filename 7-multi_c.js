const arg = process.argv[2];

const x = parseInt(arg);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  let output = "C is fun";

  for (let i = 1; i < x; i++) {
    output += "\nC is fun";
  }

  console.log(output);
}
