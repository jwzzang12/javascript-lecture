//반복문
// while for

// let i = 0;
// while (i <= 10) {
//   //continue / break
//   console.log(i);
//   i = i + 1;
// }
// console.log("반복문이 끝났습니다.");
// i++ == i + 1
for (i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i > 30) {
    break;
  }
  console.log(i);
}
console.log("반복문이 끝났습니다.");

i = 0;
while (true) {
  console.log(i);
  if (i > 100) {
    break;
  }
  i++;
}
