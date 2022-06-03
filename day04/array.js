const animals = []; // 객체 리터널
const animalList = new Array(); // 객체 생성
const fruits = ["apple", "banana", "berry", "plum", "pear", "grapes"];
const list = ["melon", "kiwi", "orange"];

new Object();
{
} //객체 리터럴
animalList[0] = "rabbit";
animalList[1] = "cow";
animalList[2] = "deer";

animals.push("lion");
animals.push("tiger");
animals.push("bear");
animals.push("cat");
console.log(...animals);

//...연산자 불변성
const copyAnimals = animals.concat(animalList); //배열을 연결해서 새로운 배열을 만들어줌
const copyAnimals02 = [...animals]; //concat이랑 똑같음
copyAnimals02.push("dog");

console.log("🚀 ~ file: array.js ~ line 2 ~ animals", animals);
console.log("🚀 ~ file: array.js ~ line 19 ~ animalList", animalList);
console.log("🚀 ~ file: array.js ~ line 19 ~ concatAnimals", copyAnimals02);

const sliceItem = animals.slice(1, 2); //원본 배열에 영향을 미치지 않음
console.log("🚀 ~ file: array.js ~ line 21 ~ sliceItem", sliceItem);
console.log("🚀 ~ file: array.js ~ line 2 ~ animals", animals);

const spliceItem = animals.splice(1); //splice는 배열을 찢어,,,(원본 배열에 영향을 미친다)
console.log("🚀 ~ file: array.js ~ line 21 ~ spliceItem", spliceItem);

animals.join(); //문자로 바뀜
console.log("🚀 ~ file: array.js ~ line 21 ~ animals.join();", animals.join("?"));

animals.unshift("cat"); //맨앞으로 넣기

animals.join();
console.log("🚀 ~ file: array.js ~ line 26 ~ animals.join();", animals.join());
const popItem = animals.shift();
console.log("🚀 ~ file: array.js ~ line 28 ~ popItem", popItem);
//push 뒤로 밀어넣기 pop 뒤에서 빼내기 unshift 앞으로 밀어넣기 shift 앞에서 빼내기
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//원시 데이터 (primitive type)
let num = 10;
let str = "장성호";
let isTrue = true;

let myNum = num;
myNum++;
console.log("🚀 ~ file: array.js ~ line 28 ~ num", num);
console.log("🚀 ~ file: array.js ~ line 28 ~ myNum", myNum);

//참조데이터 reference type

let arr = fruits;
arr.push("peach");
console.log("🚀 ~ file: array.js ~ line 33 ~ fruits", fruits);
console.log("🚀 ~ file: array.js ~ line 34 ~ arr", arr);
