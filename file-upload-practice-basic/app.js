const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록

app.post('/uploads', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(rea.body);
  res.send('파일업로드 완료!');
});

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/result', uploadDetail.single('profile'), (req, res) => {
  const { userId, userPw, userName, age } = req.body;
  const profileImg = req.file.filename;
  console.log(req.file);
  res.render('result', {
    userId,
    userPw,
    userName,
    age,
    profileImg,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
