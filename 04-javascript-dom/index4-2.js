let ind = 0;

document.querySelector('#upBtn').addEventListener('click', () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDay() + 1;
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();

  const newTr = document.createElement('tr');
  const newIndex = document.createElement('td');
  const newVisitor = document.createElement('td');
  const newContent = document.createElement('td');
  const newWriteDay = document.createElement('td');

  newIndex.innerHTML = ind + 1;
  newVisitor.innerHTML = document.querySelector('#visitor').value;
  newContent.innerHTML = document.querySelector('#content').value;
  newWriteDay.innerHTML = `${year}-${month}-${day}-${hour}:${minute}`;

  newTr.append(newIndex, newVisitor, newContent, newWriteDay);

  document.querySelector('table').append(newTr);
  document.querySelector('#visitor').value = '';
  document.querySelector('#content').value = '';
});
