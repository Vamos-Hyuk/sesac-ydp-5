console.log(document); // js
console.log($(document)); // jquery

// 1. Load Event
// in js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom 트리가 완성되면 실행되는 이벤트~');
});

// in jquery
// $(document).ready(function () {
//   console.log('ready - 문서 dom 트리가 완성되면 실행되는 이벤트~');
// });

// $(function () {
//   console.log('안녕?');
// });

// // 2. Mouse Event
// $('.p-msg').click(function () {
//   $('.p-msg').css('color', 'red');
// });

// // $('.num').click(function () {
// //   //   $('.num').css('color', 'blue');
// //   $(this).css('color', 'blue');
// // //   $(this): 자기자신 = 이벤트가 적용된 요소
// // });

// $('.num').on('click', function () {
//   $(this).css('color', 'blue');
// });

// click in js
const nums = document.querySelectorAll('.num');
// console.log('nums', nums);
for (let num of nums) {
  //   console.log('num', num);
  num.addEventListener('click', function () {
    console.log(this);
    this.style.color = 'blue';
  });
}

// mouseover(): 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

$('.numbers').on('mouseover', function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>handler for .on() called!!</div>');
});

// hover(): 마우스 올리고/ 땠을 떄
$('.div-hover').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  }
);
