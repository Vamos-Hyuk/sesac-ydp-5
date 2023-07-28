// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); //1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); //5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;

console.log(obj, obj2);
console.log(obj === obj2);

obj.five = 5;
console.log(obj, obj2);
console.log(obj === obj2);
// obj와 obj2는 현재 같은 데이터를 갖고 참고값(address, 주소)도 같다

///////////////////////////////////////////////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4);
// why? obj3와 obj4는 현재 같은 데이터를 갖지만, 서로 다른 별도의 객체
// 즉, 참조갑(address, 주소)가 다르다
