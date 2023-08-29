const User = require('../model/User');
console.log(User);

exports.main = (req, res) => {
  res.render('index', { title: '동적 폼 실습' });
};

exports.practice1 = (req, res) => {
  console.log('req.body: ', req.body);

  console.log('User.users: ', User.users);
  const userDatas = User.users.split('\n');
  console.log(userDatas);

  const users = [];
  const userIds = [];
  for (let user of userDatas) {
    users.push({
      realId: user.split('//')[0],
      realPw: user.split('//')[1],
      name: user.split('//')[2],
    });
    userIds.push(user.split('//')[0]);
  }
  console.log(users);
  console.log(userIds);

  const idx = userIds.indexOf(req.body.userId);
  if (idx >= 0) {
    console.log('아이디 있음');
    console.log(users[idx]);
    console.log(users[idx].realId);
    console.log(users[idx].realPw);
    if (users[idx].realPw === req.body.userPw) {
      console.log('비밀번호 일치');
      res.send({ userInfo: users[idx], isSuccess: true });
    } else {
      console.log('비밀번호 불일치');
      res.send({ isSuccess: false });
    }
  } else {
    console.log('아이디 없음');
    res.send({ isSuccess: false });
  }
};
