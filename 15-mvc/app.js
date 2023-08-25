const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// localhost:PORT로 express 앱이 실행~~
// indexRouter에서는 localhost:PORT/ 기본경로
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 404 에러 처리
// 맨 마지막 라우터로 설정해야함!!
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
