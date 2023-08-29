// TODO: DB(mysql) 연결
// TODO: 모델 코드
 const mysql = require('mysql')

 const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac3',
 })

 exports.postSignup = (user, cd) => {
    conn.query(
        `insert into user value (null, "${user.userid}", "${user.name}", "${user.pw}")`,
        (err, rows) => {
            if (err) => {
                throw err
            }
            cd(rows)
        }
    )
 }

exports.signin = (user, cd) => {
    conn.query(
        `select * from user where userid = "${user.userid}, and pw = "${user.pw}"`,
        (err, rows) => {
            if (err) {
                throw err 
            }
            cd(rows)
        }
    )
}