function callbackOne(a: number, b: number, callback: (a: number, b: number) => void) {
  callback(a, b);
}

callbackOne(5, 3, (a, b) => {
  let result = a + b;
  console.log("덧셈 결과: ", result);
});
