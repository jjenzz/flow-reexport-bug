// @flow
function someFunction<T>(param: T): T {
  return param;
}

export function foo() {
  return someFunction("test");
}

// works (but see ../index.js)
const num: number = foo();
console.log(num);
