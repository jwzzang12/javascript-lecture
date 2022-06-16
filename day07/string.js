const myName = "오늘은 비가 옵니다.";
console.log(myName.length);
console.log(myName.charAt("")); //문자열을 하나씩 뽑아줌
console.log(myName.substring(0, 5));
console.log(myName.substring(0)); //전체출력
console.log(myName.substring(0, myName.length)); //전체출력
console.log(myName.charCodeAt(2));
console.log(myName.split(" ")); //()안의 요소를 기준으로 문자열을 나눠서 배열로 만듦
console.log(myName.startsWith("동해")); //결과값 : true,false == endsWith
console.log(myName.indexOf("비가")); //몇번째 있는지 알려줌 없으면 값이 -1
console.log(myName.includes("오늘")); //결과값 : true,false

const myName02 = "abcdefghijklmn";
console.log(myName02.charCodeAt(1));

const myNum = "1";
console.log(myNum.padEnd(7, "*")); //*7개 찍는다는 뜻
console.log(myNum.padStart(7, "*"));

const greeting = "           Hello Javascript";
console.log(greeting.trim());
