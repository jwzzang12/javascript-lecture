console.log("hello javascript");
//comment 달기
/**
 *
 * 긴 주석
 *
 */

//자료형 data type
//인터프리팅(동시통역) vs 컴파일(번역)
let num = 10; // = assignment
let age = 57;
let name = "문지원";
console.log(typeof num); //숫자 Number
console.log(typeof "문지원"); //문자 String
console.log("" == ""); //문자 String
console.log("아에 이오우".length); //문자 String
//prettier-ignore
console.log("\"아에이\"오우"); //문자 String
console.log("동해물과 백두산이 마르고 닳도록 \n하느님이 보우하사 우리나라 만세");
//carriage return line feed = crlf (줄바꿈)
console.log(`동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세`);

console.log("내이름은 " + name + "이고 나이는 " + age + "입니다.");
console.log(`내이름은 ${name}이고 나이는 ${age}입니다.`);
console.log(0b10); //이진수
console.log(0o10); //8진수
console.log(0x10); //16진수

console.log(typeof ("10" + 10));

//정수(-,+,0) integer //실수 float

console.log(parseInt("182" + 10));
console.log(parseInt("182" - 10));
console.log(parseFloat("182.9") - 10);
console.log(parseInt("182.9") - 10);
console.log(parseInt("182.9") - 10);
console.log(typeof NaN); //Not a Number
console.log(Infinity);
