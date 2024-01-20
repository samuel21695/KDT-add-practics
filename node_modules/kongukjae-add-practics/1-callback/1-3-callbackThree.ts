
function callbackThree(a: number, b: any, callback: (a: number, b: any) => void, errorCallback: (error: string) => void) {
  if (typeof b !== 'number') {
    errorCallback('두 번째 인자는 숫자여야 합니다.');
  } else {
    callback(a, b);
  }
}

callbackThree(5, '10', 
  (a, b) => {
    let result = a + b;
    console.log("타입 검사를 통과한 덧셈 결과: ", result);
  },
  (error) => console.error(error)
);