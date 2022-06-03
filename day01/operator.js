//연산자 산술연산자...
console.log(5 + 1);
console.log(5 - 1);
console.log(5 * 1);
console.log(5 / 2);
console.log(5 % 2); //나머지 값을 알려주는 연산자

console.log(7 + 5 * 2);
console.log((0.1).toString(2));
//소수를 2진수로 바꿀때 무한소수 또는 순환소수로 나타나는 경우 유한한 숫자로 바꾸어야 한다.
//이때 연산의 오류가 나타난다.

console.log((0.1 + 0.2).toFixed(1)); //자리수 -> data type string

let num = 256730;

const 오만원 = parseInt(num / 50000);
const 만원 = parseInt((num % 50000) / 10000);
const 오천원 = parseInt((num % 10000) / 5000);
const 천원 = parseInt((num % 5000) / 1000);
const 오백원 = parseInt((num % 1000) / 500);
const 백원 = parseInt((num % 500) / 100);
const 오십원 = parseInt((num % 100) / 50);
const 십원 = parseInt((num % 50) / 10);

console.log(
  `${num}은 오만원짜리 ${오만원}장 만원짜리 ${만원}장 오천원짜리 ${오천원}장 천원짜리 ${천원}장 오백원짜리 ${오백원}개 백원짜리 ${백원}개 오십원짜리 ${오십원}개 십원짜리 ${십원}개`
);

console.log(parseInt(num / 50000));
console.log(parseInt((num % 50000) / 10000));
console.log(parseInt(((num % 50000) % 10000) / 5000));
console.log(parseInt((((num % 50000) % 10000) % 5000) / 1000));
console.log(parseInt(((((num % 50000) % 10000) % 5000) % 1000) / 500));
console.log(parseInt((((((num % 50000) % 10000) % 5000) % 1000) % 500) / 100));
console.log(parseInt(((((((num % 50000) % 10000) % 5000) % 1000) % 500) % 100) / 50));
console.log(parseInt((((((((num % 50000) % 10000) % 5000) % 1000) % 500) % 100) % 50) / 10));
