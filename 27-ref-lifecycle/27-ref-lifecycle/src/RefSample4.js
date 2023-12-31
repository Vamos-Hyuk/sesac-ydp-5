import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.create()를 담기
  inputRef = React.createRef();

  handelFocus = () => {
    console.log(this);
    // ref 설정 후, DOM 접근을 위해서는 this.inputRef..current 까지 접근
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <p> 클래스형 컴포넌트에서 버튼 클릭시 input에 focusing 처리</p>
        {/* ref props 사용해서 ref 설정 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handelFocus}>focus</button>
      </div>
    );
  }
}
