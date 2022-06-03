let a = true;
if (!a) {
  console.log("조건이 만족되면 출력 합니다.");
} else {
  console.log("조건이 만족되지 않으면 출력 합니다.");
}

let score = 90;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//삼항연산자
const isTrue = true;
const num = 100;
let msg = isTrue ? "참입니다." : "거짓입니다.";
