
/**
 * 두 개의 숫자를 더하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 덧셈 결과를 담은 Promise 객체
 */
function simpleAdditionPromise(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

/**
 * 두 개의 숫자를 더한 후, 그 결과를 2배로 곱하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 곱셈 결과를 담은 Promise 객체
 */
function promiseFour(a: number, b: number): Promise<number> {
  return simpleAdditionPromise(a, b).then(sum => sum * 2);
}

promiseFour(5, 5).then(result => {
  console.log("곱셈 결과: ", result);
});