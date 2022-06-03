//let const var
//변수를 만들고 값을 할당하지 않으면 undefined를 할당
let num = null;
num = 3;
console.log("🚀 ~ file: variable.js ~ line 3 ~ num", num);
if (num) {
  console.log("참");
} else {
  console.log("거짓");
}

const num = null;
num = 3;
console.log("🚀 ~ file: variable.js ~ line 3 ~ num", num);
if (num) {
  console.log("참");
} else {
  console.log("거짓");
}

// const는 할당값을 변경할 수 없음 (중복할당도 불가능)
// var는 function scope let, const는 block scope
// 프로그래밍 언어에서 block = {}
//block안에 선언된 변수 : 지역변수 local variable

{
  var blockNum = 1000;
}
console.log(blockNum);

let a = 10,
  b,
  c,
  d,
  e;
const aa = 10,
  bb = 20;
