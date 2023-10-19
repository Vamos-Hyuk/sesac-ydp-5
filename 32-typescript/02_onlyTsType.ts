// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';

// drink.push('얏호'); // tuple 한계 이렇게 하면 tuple을 사용하는 의미가 없음!

console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호');
console.log(drink2);

// tuple ex
type productInfo = [number, string, number]; //type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3', 130000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product3: [number, string, number] = [3, '로지텍 K380', 'apple'] // type error

// Enum(열거형)
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco);
console.log(Cake.kiwi);

/////////////////////////////////
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sean' };

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

// 실습1 : 오브젝트, 불리언 데이터 타입 순으로 설정하는 튜플 만들어보기
// 실습2 : olimpic_newgame[1] = false 를 했을때 변경되지 않도록 수정할 수 없는 데이터 만들기

let olimpicgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

// 선택실습 : arrA와 arrB는 같은 결과가 출력된다. 차이가 무엇인지 생각 댓글로 달아 보시오
let arrA: any[] = [1, true, 'string'];
let arrB = [1, true, 'string'];
console.log(arrA);
console.log(arrB);
