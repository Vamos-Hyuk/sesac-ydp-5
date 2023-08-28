create table visitor (
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);
drop table visitor;
desc visitor;

insert into visitor value (1, '홍길동', '내가 왔다.');
insert into visitor value (2, '이찬혁', '으라차차');
select * from visitor;

show databases;
-- 이모지, 특수문자를 사용할 수 있는 인코딩
create database sesac2 character set utf8mb4 collate utf8mb4_unicode_ci;
use sesac2;
create table visitor (
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);
desc visitor;
insert into visitor (name, comment) value ('홍길동', '내가 왔다.');
insert into visitor (name, comment) value ('이찬혁', '으라차차');

insert into visitor values(null, name, hi)
select * from visitor;

-- user라는 새로운 계정(mysql 접속 가능한 계정) 생성
create user 'user'@'%' identified with mysql_native_password by '1234';
drop user 'user'@'%';
-- user 계정에 대해서 모든 권한 부여 = (DCL 중에서 grant)
grant all privileges on *.* to 'user'@'%' with grant option;
-- mtsql 캐시 새로고침
flush privileges;

show databases;
select * from mysql.user;
