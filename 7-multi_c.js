// Access the first command-line argument.
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
const x = parseInt(arg);

// Check if the converted number is NaN (Not-a-Number).
// If it is, the argument could not be reliably converted to an integer.
if (isNaN(x)) {
  // If the argument is not a valid number, print the specified message.
  // This is the first allowed console.log.
  console.log("Missing number of occurrences");
} else {
  // If x is a valid number, prepare to build the output string.
  // Initialize an empty string that will accumulate all "C is fun" messages.
  let output = ""; // Using 'let' because its value will be reassigned in the loop.

  // Use a for loop to iterate 'x' times.
  // The loop runs from i = 0 up to, but not including, x.
  for (let i = 0; i < x; i++) {
    // Append "C is fun" followed by a newline character to the output string.
    // This ensures each message appears on a new line in the final print.
    output += "C is fun\n";
  }

  // Print the accumulated string.
  // This is the second and final allowed console.log.
  // If x is 0 or a negative number, the loop won't run, and an empty string will be printed,
  // which matches typical behavior for printing something '0' or less times.
  console.log(output);
}
