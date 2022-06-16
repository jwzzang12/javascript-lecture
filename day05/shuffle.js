const lotto = [];
const sortLotto = [];
for (let i = 1; i < 46; i++) {
  lotto.push(i);
}
// let random = Math.floor(Math.random() * lotto.length);
// let a = lotto[random - 1];
// lotto[random - 1] = lotto[0];
// lotto[0] = a;

for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * lotto.length);
  let random02 = Math.floor(Math.random() * lotto.length);
  let a = lotto[random02];
  lotto[random02] = lotto[random];
  lotto[random] = a;
}

for (let i = 0; i < 6; i++) {
  sortLotto.push(lotto[i]);
}
sortLotto.sort(function (first, second) {
  return first - second;
});

console.log(sortLotto.join(","));
