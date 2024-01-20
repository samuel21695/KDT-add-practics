
/**
 * 두 개의 숫자를 더하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 덧셈 결과를 담은 Promise 객체
 */
function promiseTwo(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

promiseTwo(10, 20).then(result => {
  console.log("비동기 덧셈 결과: ", result); // 비동기 덧셈 결과: 30
});