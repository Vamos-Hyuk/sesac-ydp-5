// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
  sum = sum + i; // sum += i
  //   console.log(i, sum);
}
console.log(sum);
console.log('--------');

// 배열, for문
const fruits = ['사과', '배', '포도', '망고'];
console.log(fruits.length); //배열의 원소 개수 = 배열 크기(길이)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1 ~ 20 중에서 짝수일 때의 합 구하기
let sum2 = 0; // 합을 의미하는 변수
// - 1 ~ 20 까지 숫자를 반복
// - 현재 반복 숫자가 짝수라면 sum2 에 더하기
for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i % 2 === 0) {
    sum2 = sum2 + i;
    console.log(i, sum2);
  }
}
console.log('--------');
// while 문
let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx = idx + 1; // idx += 1
}
console.log('--------');

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프
  console.log('안녕', idx2);
  idx2 = idx2 + 1; // idx2 += 1

  // 무한루프를 빠져나오는 조건
  if (idx2 === 10) {
    break;
  }
}

// continue
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }

  sum3 = sum3 + i;
  console.log(i, sum3);
}
console.log(sum3);

// 실습. 합계 구하기
let sum4 = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum4 += i;
  }
}
console.log(sum4);
// 실습. 13의 배수이자 홀수를 찾아보자
for (let i = 0; i < 10001; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}
let numbers = parseInt(prompt('숫자 입력'));
for (let i = 0; i <= numbers; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}
// 실습. 구구단 만들기
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i + 'x' + j + '=' + i * j);
  }
}
