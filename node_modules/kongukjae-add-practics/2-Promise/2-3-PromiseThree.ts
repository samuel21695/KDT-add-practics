
/**
 * 숫자를 더하는 Promise를 생성하는 함수입니다.
 * 
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 숫자를 더한 결과를 담은 Promise 객체
 * @throws `'두 번째 인자는 숫자여야 합니다.'` - 두 번째 인자가 숫자가 아닐 경우 발생하는 예외
 */
function promiseThree(a: number, b: any): Promise<number> {
  return new Promise((resolve, reject) => {
    if (typeof b !== 'number') {
      reject('두 번째 인자는 숫자여야 합니다.');
    } else {
      resolve(a + b);
    }
  });
}

promiseThree(5, '10')
  .then(result => console.log("타입 검사를 통과한 덧셈 결과: ", result))
  .catch(error => console.error(error));