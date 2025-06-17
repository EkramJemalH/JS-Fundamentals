const firstArgument = process.argv[2];

const convertedNumber = parseInt(firstArgument);
if (isNaN(convertedNumber)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${convertedNumber}`);
}
