const numberOfArguments = process.argv.length - 2;

// Check the number of arguments and print the appropriate message
if (numberOfArguments === 0) {
  // If no arguments are passed
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed
  console.log("Argument found");
} else {
  // If more than one argument is passed
  console.log("Arguments found"); // This line is now correctly console.log
}
