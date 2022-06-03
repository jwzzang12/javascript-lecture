const arr = [1, 2, 3, 4, 5];
const arr02 = [1, "강아지", true, 4, 5];
//객체는 레퍼런스 기본형이 아닌것들은 reference type
//기명함수
function say() {
  console.log("야호");
}
const a = {
  "my name": "문지원", //잘 안씀
  height: 100,
  weight: 50,
  iq: 150,
  //익명함수
  speak: function () {
    console.log("말을 합니다.");
  },
};
const b = a;
const c = {
  height: 300,
  weight: 150,
  iq: 280,
};
b.height = 174;
console.log(a.height);
console.log(a["my name"]);
console.log(b.height);
console.log(a.speak());
