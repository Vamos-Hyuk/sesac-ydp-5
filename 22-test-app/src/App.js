import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'kyle';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };
  const animal = 'cat';
  const a = 10;
  const b = 5;
  const title = 'Hello World';

  return (
    <div className="App">
      {/* 자동 생성 코드*/}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 하나로 감까인 요소 */}
      <>
        {/* js문법 사용
          - {}로 감싸면 js 표현식 사용 가능
          - {}안에 삼항 연산자 사용 가능 (if, for문 사용 불가) */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? (
            <span>새싹인</span>
          ) : (
            <span>새싹이 뭐지?</span>
          )}
        </div>
        {/* 3. style 속성 
              - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
              - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함
               */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>
        {/* 4. className 사용
            - class 속성이 아닌 className 속성 사용
            
            5. 종료 태그가 없는 태그 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            */}
        <div>
          "이것은 div 입니다"
          <h3>"이것은 div 태그 안에 있는 h3 태그 입니다"</h3>
        </div>
        <h2>제 반려 동물의 이름은 {name} 입니다.</h2>
        <h2>
          {name}은 {animal}입니다.
        </h2>
        <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
        <div>{a > b && 'a가 b보다 큽니다'}</div>
        <div className="test">{title}</div>
        <div>
          아이디 : <input type="text" className="아이디"></input>
        </div>
        <br />
        <div>
          비밀번호 : <input type="password" className="비밀번호"></input>
        </div>
        <div className="container">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="navy"></div>
          <div className="purple"></div>
        </div>

        <div className="body body1">
          <div className="eye-white">
            <div className="eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
      </>
    </div>
  );
}

export default App;
