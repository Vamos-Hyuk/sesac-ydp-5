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
obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4);
// 면접 단골 질문! 같은 값이긴 하나 서로 바라보는 주소가 다르기 떄문에 비교했을때 false 로 나옴

////////////////////////////////////////////////
const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); //true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); //true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4); //false

arr.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4); //true
////////
// obj = { hi: 'hi' }; // obj가 const로 선언되어 재할당 불가능
// 즉, obj가 참조하고 있는 주소를 바꿀 수 없음

////////
// 객체 리터럴 (object literal)
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"

/////////////////////////////////////////////
console.clear(); // 앞에 한거 볼려면 주석처리 하면 됨.

// js 표준 내장 객체
// 1. Date 객체: 시간, 날짜
let now = new Date(); // 현재 일시
console.log(now);

// 타임스탬프(timestamp)
// : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970);

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);

let date2 = new Date('2023', '06', '17'); // MM(0(1월)~11(12월) 주의)
console.log(date2);

// 관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth());
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay());

// 퀴즈
// getDay() 메서드를 이용
// Date 객체를 이용해 오늘 요일을 얻고, (힌트, getDay())
let day = new Date();
let date = day.getDay();
console.log(date);

// if or switch 구문 이용해서 평일/주말인지 콘솔창에 출력하는 코드 작성
if (date == 6 || date == 0) {
  console.log('주말');
} else console.log('평일');

console.clear();
// Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E); //자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

//메서드
console.log(Math.min(100, -2, 0, 5));
console.log(Math.max(100, -2, 0, 5));
console.log(Math.round(5.3124)); //반올림
console.log(Math.ceil(5.3124)); //올림
console.log(Math.floor(5.3124)); //내림
console.log(Math.random()); //0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10
// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 10

// 퀴즈
// 1 ~ 100
console.log(Math.floor(Math.random() * 100) + 1); // 0 <= x < 10

// 20 ~ 22
console.log(Math.floor(Math.random() * 3 + 20)); // 0 <= x < 10
