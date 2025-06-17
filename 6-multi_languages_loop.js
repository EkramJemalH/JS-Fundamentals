const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let fullOutput = messages[0];
for (let i = 1; i < messages.length; i++) {
  fullOutput += "\n" + messages[i];
}
console.log(fullOutput);
