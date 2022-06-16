//함수 function

//함수 선언문 function declation
hello("jw"); //인자 argument
function hello(name) {
  console.log(`${name} hello`);
}

//이 함수에서 name은 매개변수 parameter

//함수 표현식 function expression 익명함수
const helloExpression = function (name) {
  console.log(`${name} hello`);
};
helloExpression("jw");

//표현식으로 작성한 함수는 호이스트...가 안된답니다...
//대충 인자를 함수보다 먼저쓰면 작동 안한다는 이야기

//만약 함수를 값으로 인식시키려면 return을 사용한다.
const sum = function (a, b) {
  console.log(a + b);
};
sum(2, 4);

const result = sum(2, 4);
console.log(result);
//undefined

const sum02 = function (a, b) {
  return a + b;
};

const result02 = sum02(2, 4);
console.log(result02); //함수를 값으로 인식 시키려면 return을 사용한다.

const num = 10;
const avg = function (a, b, c) {
  return (a + b + c) / 3;
  //리턴문 아래 있는 것들은 실행되지 않음 (return 만나면 함수 종료)
};
console.log(avg(100, 40, 90));
//자바스크립트의 모든 함수는 return을 가지고 있다.
//만약 명시적으로 return이 사용되지 않았으면 undefined를 반환한다.

const noreturn = function () {
  console.log("나는 리턴이 없는 함수입니다.");
};
console.log(noreturn());
//즉시 실행 함수 iife (immediately invoked function expression)
//모듈이나 변수의 실행범위를 제약할 때...
const iife = function () {
  return "나는야 문자를 반환하는 함수표현식";
};
console.log(iife());
const temp = iife;
console.log(temp);

const return100 = function () {
  return 100;
};

function myCallBack(callback) {
  console.log(`나는 숫자 ${callback()}을 출력합니다.`);
}
myCallBack(return100);
//콜백함수는 함수의 매개변수로 전달되어져서 실행되는 함수이다.
//실행할 수 없음 eg callback() <-이런식으로 못적음

const callback02 = function () {
  console.log("callback02");
};
