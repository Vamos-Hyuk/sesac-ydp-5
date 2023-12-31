-- 데이터베이스: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL: RDBMS에서 사용되는 언어(데이터베이스를 구축, 관리, 활용하기 위한 언어)

-- DDL (Data Definition Language)
-- 데이터베이스, 테이블을 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성 
create database sesac default character set utf8 default collate utf8_general_ci;

-- 2. Database 목록 조회 
show databases;

-- 3. Database 사용 선언 
use sesac;

-- 4. Database 삭제
drop database sesac;


-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ("옵션")
-- not null : null 허용 안함
-- auto_increment : 자동 숫자 증가, 테이블에 데이터 추가할 때마다 자동으로 숫자 증가
-- primary key : 기본키 (중복값 허용 X, null 허용X) -> 하나의 테이블당 하나만!!
-- default 기본값 : 특정 속성에 기본 값을 설정
-- unique : 중복을 허용x, null 허용 -> 하나의 테이블당 여러개 가능!!

create table product (
	id int primary key not null auto_increment,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);

-- 2. 테이블 목록 확인
-- 현재 사용중이 데이터베이스의 모든 테이블 조회
show tables;

-- 3. 테이블 구조 확인
-- 테이블의 컬럼 정보 (자료형, null 여부, key, default 등)
desc product;

-- 4. 테이블 삭제
-- drop : 테이블 존재 자체를 없앰
drop table product;
-- truncate: 테이블 구조만 남겨 놓고 모든 행 삭제
truncate table product;

-- 5. 테이블 정의 수정
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가 되었을 때
-- 컬럼 정보가 바뀌어야 하는 경우 사용

-- 5-1. 컬럼 추가
alter table product add new_column date;

-- 5-2. 컬럼 수정
alter table product modify new_column int;
-- 컬럼명 변경
alter table product change new_column new_column_2 int;

-- 5-3. 컬럼 삭제
alter table product drop new_column_2;

