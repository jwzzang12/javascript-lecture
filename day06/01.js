//자바스크림트는 비동기적 실행
//eg 콜백함수, setTimeout, ajax

setTimeout(function () {
  console.log("나는 3초 뒤에 호출합니다.");
}, 0);

(function aa() {
  console.log("즉시실행함수");
})();

//동기적 실행 요청 들어온 순서대로 실행되는 것

//이벤트 루프
//자바스크립트 실행환경 single thread (서빙하는 사람이 한명)

function aa() {
  console.log("aa");
}
function bb() {
  console.log("bb");
}
for (let i = 0; i < 10; i++) {
  console.log("나는 만번 찍힙니다.");
}
aa();
bb();
//실행 순서 for -> aa(),bb() -> setTimeout
function first() {
  second();
  console.log("나는 첫번째입니다.");
}
function second() {
  third();
  console.log("나는 두번째입니다.");
}
function third() {
  console.log("나는 세번째입니다.");
}
first();
