
/**
 * 두 개의 숫자를 더하는 비동기 작업을 수행하는 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 숫자를 더한 결과를 담은 Promise 객체
 */
function promiseFive(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, Math.random() * 2000);
  });
}

// Promise.all 사용 예제
Promise.all([promiseFive(3, 7), promiseFive(4, 4)]).then(results => {
  console.log("모든 작업 완료 결과: ", results); // 모든 작업 완료 결과: [10, 8]
});

// Promise.race 사용 예제
Promise.race([promiseFive(1, 2), promiseFive(3, 4)]).then(result => {
  console.log("가장 빠른 작업 완료 결과: ", result); // 가장 빠른 작업 완료 결과: 3 or 7
});