
/**
 * 두 개의 숫자를 더하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 덧셈 결과를 담은 Promise 객체
 */
function addSix(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000); // 1초 후 덧셈
  });
}

/**
 * 두 개의 숫자를 뺄셈하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 뺄셈 결과를 담은 Promise 객체
 */
function subtractSix(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a - b), 1500); // 1.5초 후 뺄셈
  });
}

/**
 * 두 개의 숫자를 곱하는 비동기 함수입니다.
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns 곱셈 결과를 담은 Promise 객체
 */
function multiplySix(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a * b), 500); // 0.5초 후 곱셈
  });
}

// Promise.all 사용 예제
Promise.all([addSix(10, 5), subtractSix(10, 5), multiplySix(10, 5)]).then(results => {
  console.log("PromiseSix: 모든 연산 결과: ", results); // 모든 연산 결과: [15, 5, 50]
});

// Promise.race 사용 예제
Promise.race([addSix(10, 5), subtractSix(10, 5), multiplySix(10, 5)]).then(result => {
  console.log("PromiseSix: 가장 빠른 연산 결과: ", result); // 가장 빠른 연산 결과: 50 (곱셈)
});
