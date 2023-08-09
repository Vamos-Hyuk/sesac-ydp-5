// math2 module
// 자주 사용할 함수와 변수를 정의한 파일

const add = (a, b) => a + b;
const E = 2.718;
const PI = 3.141592;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// 객체로 감싸서 내보내기
module.exports = {
  add: add,
  PI: PI,
  E: E,
  sub: sub,
  mul: mul,
  div: div,
};

// module.exports = {
//     add,   //obj에쇼서 key, value가 동일할 때 생략 가능
//     PI,
//     E,
// }
