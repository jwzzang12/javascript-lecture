// if (조건) {
// } else if (조건) {
// } else if (조건) {
// } else {
// }

const beverage = "cola";
switch (beverage) {
  case "cola":
    console.log("2000원");
    break;
  case "cider":
    console.log("2500원");
    break;
  case "coffee":
    console.log("3000원");
    break;
}
// parseInt - input에서 넘어온 값을 정수로 바꿀 때
// Math.round 반올림
// Math.floor 버림
// Math.ceil 올림

const score = 90;
// === 상수만 쓸 수 있다.
switch (Math.floor(score / 10)) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
