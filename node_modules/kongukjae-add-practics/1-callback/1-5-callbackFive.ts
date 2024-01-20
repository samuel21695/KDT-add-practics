
function callbackFive(a: number, b: number, multiplyCallback: (result: number) => void) {
  setTimeout(() => {
    let sum = a + b;
    multiplyCallback(sum);
  }, 1000);
}

callbackFive(3, 7, (sumResult) => {
  setTimeout(() => {
    let multiplyResult = sumResult * 3;
    console.log("비동기 곱셈 결과: ", multiplyResult);
  }, 1000);
});
