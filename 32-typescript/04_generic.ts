// generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에 타입을 명시
// => 재사용성 증가
// ==> type을 변수처럼 사용한다!
// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}
function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3]));
console.log(strArrLen(['1', '2', '3', '4']));

// <T>를 이용하새 매개변수를 선언하는 공간을 하나 더 만듦!
// -> type만 올 수 있음
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<string>(['1', '2', '3', '4'])); //4
console.log(arrLen<number>([1, 2, 3])); //3
console.log(arrLen<string | number>(['원', 2])); // 2

///////////////////////////////////////////
function printSome<T>(x: T, y: T): void {
  console.log(x, y);
}

printSome<string>('hi', 'hello'); // hi hello
printSome<number>(100, 200); // 100 200
printSome<boolean[]>([true, false], [false, false]); // [true, false], [false, false]

// T: type
// U: usually
function printSome2<T, U>(x: T, y: U): void {
  console.log(x, y);
}
printSome2<string, number>('1', 1);

///////////////////////////////////////////////
// interface 와 generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'black',
    storage: 128,
  },
};
console.log(iphone15);

type galaxyOption = {
  color: string;
  isBuz: boolean;
};

const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};
console.log(galaxy23);

// 실습1
function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(5, 11));

// // 실습2
// function sum2(a: number, b: number, c: number, d: number, e: number) {
//   return a + b + c + d + e;
// }

function sum2(...number: number[]): number {
  let sum = 0;
  for (let num of number) {
    sum += num;
  }
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));

// 실습 3

function arrElement<T>(arr: T[], index: number): any {
  return `${arr[index]}와 타입은 : ${typeof arr[index]}`;
}
console.log(arrElement<string>(['a'], 0));
