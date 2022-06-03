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
console.log("🚀 ~ file: array02.js ~ line 21 ~ copyAnimals", copyAnimals);
const copyAnimals02 = ["rabbit", ...animals];

console.log("🚀 ~ file: array.js ~ line 2 ~ animals", animals);
console.log("🚀 ~ file: array.js ~ line 19 ~ ", animalList);
console.log("🚀 ~ file: array.js ~ line 19 ~ concatAnimals02", copyAnimals02);
console.log(copyAnimals02 === animals);
console.log(copyAnimals === animals);
