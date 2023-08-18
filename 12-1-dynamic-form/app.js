const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', (req, res) => {
  const userId = 'banana';
  const userPw = '4321';
  console.log(req.body);
  if (!req.body.id || !req.body.pw) {
    res.send('아이디, 비밀번호는 필 수 값 입니다.');
  } else if (userId === req.body.id && userPw === req.body.pw) {
    res.send(req.body);
  } else {
    res.send('아이디 또는 패스워드 오류😭');
  }
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
