
/**
 * 두 개의 숫자를 더하는 Promise를 생성합니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 덧셈 결과를 담은 Promise 객체
 */
function promiseOne(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

promiseOne(5, 3).then(result => {
  console.log("덧셈 결과: ", result);
});