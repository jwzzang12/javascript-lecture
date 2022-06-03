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
