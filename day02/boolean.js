// true/false number string boolean
let isTrue = true; // 0,1
//비교연산자 === 같다 !== 다르다
if (isTrue === true) {
  console.log("isTrue는 참입니다.");
} else {
  console.log("isTrue는 거짓입니다.");
}
console.log(3 === 4);
console.log(3 !== 4);
console.log(3 == "3");
console.log(3 === "3");

console.log(3 >= 4); //크거나 같다
console.log(3 <= 4); //작거나 같다

//falsy 0, null, undefined, NaN
console.log(undefined);
console.log(!undefined);
console.log(!0);
console.log(!1); //0을 제외한 다른 숫자들은 true

let num = null;
if (num) {
  console.log("참");
} else {
  console.log("거짓");
}

console.log("ㄱ" > "ㄴ");
console.log("a".charCodeAt());
console.log("b".charCodeAt());

console.log(5 > 3 || 4 > 3); //합집합 둘다 거짓일때만 거짓
console.log(5 > 3 && 4 > 3); //교집합 둘다 참일때만 참

console.log(2 ** 2); //양수만 가능
console.log(Math.pow(-2, 2));
