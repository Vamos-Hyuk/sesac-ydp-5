'use strict'; // 자바스크립트 언어를 엄격하게 사용하겠다라는 뜻

// sequelize 모듈 호출해서 Sequelize 변수에 저장
const Sequelize = require('sequelize');

// config.json 파일을 불러와서 development 환경의 db 설정
// config : db 접근 가능한 설정 값 저장
const config = require(__dirname + '/../config/config.json')['development'];

// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, // sesac2
  config.username, // user
  config.password, // 1234
  config // {}
);

// db = { sequelize, Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
db.Visitor = require('./Visitor')(sequelize, Sequelize);

// db 객체 내보냄 (모듈화 내보냄. 다른 곳에서 db 객체 사용)
module.exports = db;
