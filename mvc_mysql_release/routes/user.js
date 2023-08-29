// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT
router.get('/', controller.main);
router.get('/signup', controller.signup);
router.post('/signup', controller.postSignup);
router.get('/signin', controller.signin);
router.post('/signin', controller.postSignin);
router.post('/profile', controller.profile);
router.post('/profile/edit', controller.editProfile);
router.post('/profile/delete', controller.deleteUser);

router.get('*', controller.404);

module.exports = router;
