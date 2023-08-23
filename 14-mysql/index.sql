-- 데이터베이스 생성 + 한글 인코딩
create batabase 이름 default character set utf8 default collate utf8_general_ci;

-- 테이블 생성
create table 테이블명 (
    속성이름1 데이터타입 primary key,
    속성이름2 데이터타입,
    [foreign key 속성이름 reference 테이블이름(속성이름)]
);


name 속성 값으로 "홍길동"이 저장되었다면?
CHAR(5) - 고정길이 (크기가 5로 고정)
홍길동__
VARCHAR(5) - 가변길이 (최대 크기가 5)
홍길동


-- ALTER 문
-- 생성된 테이블의 속성과 속성에 대한 제약 및 기본키, 외래키를 변경
ALTER TABLE 테이블명 ADD 속성이름 데이터타입   -- 속성 새로 추가하는 경우
ALTER TABLE 테이블명 DROP COLUMN 속성이름  -- 기존 속성 삭제하는 경우
ALTER TABLE 테이블명 MODIFY 속성이름 데이터타입   -- 기존 속성 수정하는 경우
