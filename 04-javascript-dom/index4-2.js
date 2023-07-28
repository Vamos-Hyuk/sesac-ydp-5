let ind = 0;

document.querySelector('#upBtn').addEventListener('click', () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1; //현재 월을 반환(0부터 시작하므로 +1 해줘야 실제 월이 된다
  let day = new Date().getDate(); // 처음에 getDay함수를 사용했는데 요일을 반영하는거라 오류가 있었다. 현재 일자를 반영하기 위해서는 getDate 함수를 반영해야한다
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  // document.createElement를 이용해 새로운 HTML요소 생성
  const newTr = document.createElement('tr');
  const newIndex = document.createElement('td');
  const newVisitor = document.createElement('td');
  const newContent = document.createElement('td');
  const newWriteDay = document.createElement('td');

  newIndex.innerHTML = ind + 1; // 방명록 순서대로 표기
  newVisitor.innerHTML = document.querySelector('#visitor').value;
  newContent.innerHTML = document.querySelector('#content').value;
  newWriteDay.innerHTML = `${year}-${month}-${day}-${hour}:${minute}`;

  newTr.append(newIndex, newVisitor, newContent, newWriteDay);
  // 테이블에 새로운 행 추가 부분
  document.querySelector('table').append(newTr);
  //   초기화 부분
  document.querySelector('#visitor').value = '';
  document.querySelector('#content').value = '';
});
