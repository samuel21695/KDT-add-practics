function addCallback(a: number, b: number, callback: (result: number) => void) {
  setTimeout(() => callback(a + b), 1000); // 1초 후 덧셈
}

function subtractCallback(a: number, b: number, callback: (result: number) => void) {
  setTimeout(() => callback(a - b), 1500); // 1.5초 후 뺄셈
}

function multiplyCallback(a: number, b: number, callback: (result: number) => void) {
  setTimeout(() => callback(a * b), 500); // 0.5초 후 곱셈
}

// 모든 연산을 순차적으로 실행
addCallback(10, 5, (addResult) => {
  console.log("덧셈 결과: ", addResult);
  subtractCallback(10, 5, (subtractResult) => {
    console.log("뺄셈 결과: ", subtractResult);
    multiplyCallback(10, 5, (multiplyResult) => {
      console.log("곱셈 결과: ", multiplyResult);
    });
  });
});
