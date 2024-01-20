async function asyncPromiseOne(a: number, b: number): Promise<number> {
  return a + b;
}

async function main() {
  try {
    const result = await asyncPromiseOne(5, 3);
    console.log("덧셈 결과: ", result);
  } catch (error) {
    console.error("오류 발생: ", error);
  }
}

main();