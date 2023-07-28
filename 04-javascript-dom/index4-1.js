document.querySelector('#resultBtn').addEventListener('click', () => {
  const value1 = Number(document.querySelector('#value1').value);
  const value2 = Number(document.querySelector('#value2').value);
  const operator = document.querySelector('#operator').value;
  let result = 0;
  if (!value1 || !value2) {
    alert('값을 넣어주세요');
  }
  switch (operator) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    case '':
      alert('연산자를 넣어주세요');
      break;
    default:
      alert('입력 가능한 연산자는 +, -, *, / 입니다');
  }
  document.querySelector('#result').value = result;
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  document.querySelector('#value1').value = '';
  document.querySelector('#value2').value = '';
  document.querySelector('#operator').value = '';
  document.querySelector('#result').value = '';
});
