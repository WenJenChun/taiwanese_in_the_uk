import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // 初始化狀態，設置計數器初始值為0
    this.state = {
      count: 0
    };
  }

  // 增加計數器值的方法
  incrementCount = () => {
    // 使用 setState 方法來更新狀態
    this.setState({ count: this.state.count + 1 });
  };

  // 減少計數器值的方法
  decrementCount = () => {
    // 使用 setState 方法來更新狀態
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>計數器</h1>
        <p>當前計數: {this.state.count}</p>
        {/* 綁定按鈕的點擊事件 */}
        <button onClick={this.incrementCount}>增加</button>
        <button onClick={this.decrementCount}>減少</button>
      </div>
    );
  }
}

export default Counter;

