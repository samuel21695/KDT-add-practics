
function callbackTwo(a: number, b: number, callback: (a: number, b: number) => void) {
  setTimeout(() => {
    callback(a, b);
  }, 1000);
}

callbackTwo(10, 20, (a, b) => {
  let result = a + b;
  console.log("비동기 덧셈 결과: ", result);
});
