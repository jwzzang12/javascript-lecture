// console.log(new Date("2022/6/5").getDay()); 무슨 요일?
const day = new Date().getDay();
switch (5) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("날짜를 잘못 입력하였습니다.");
    break;
}
