import React, { Component } from 'react';

class History extends Component {
  // 뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('정말 떠나십니까?');
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default History;
