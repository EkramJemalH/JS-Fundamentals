function add(a, b) {
  const num1 = parseInt(a);
  const num2 = parseInt(b);
  return num1 + num2;
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];

const result = add(firstArg, secondArg);

console.log(result);
