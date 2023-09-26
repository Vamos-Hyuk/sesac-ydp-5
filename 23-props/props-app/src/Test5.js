import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Props_ex1 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Props_ex1.defaultProps = {
  text: '이건 기본 text props입니다.',
};

Props_ex1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Props_ex1;
