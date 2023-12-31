// // const math = require('./math2');

// const { add, PI, E, sub, mul, div } = require('./math2');

// console.log(math, typeof math);
// console.log(math.PI);
// console.log(math.E);
// console.log(math.add(2, 4));
// console.log(math.sub(4, 2));
// console.log(math.mul(3, 3));
// console.log(math.div(10, 2));

// math2 모듈을 불러와 사용

// math2 모듈 불러오기
// const math2 = require('./math2');
// const math2 = {
//     add: add,
//     PI: PI,
//     E: E,
//     sub: sub,
//     mul: mul,
//     div: div
//   };
const { add, PI, E } = require('./math2');

// console.log(math2, typeof math2);
// // { add: [Function: add], PI: 3.141592, E: 2.718 } object
// console.log(math2.PI); // 3.141592
// console.log(math2.E); // 2.718
// console.log(math2.add(2, 4)); // 2 + 4 = 6

console.log(PI); // 3.141592
console.log(E); // 2.718
console.log(add(2, 4)); // 2 + 4 = 6
