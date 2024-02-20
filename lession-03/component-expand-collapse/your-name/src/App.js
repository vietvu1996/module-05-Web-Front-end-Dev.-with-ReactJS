import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  handler = () => {
    this.setState((prevState) => ({
      isExpand: !prevState.isExpand,
    }));
  };

  render() {
    const { isExpand } = this.state;
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <button onClick={this.handler}>
          {isExpand ? "Đóng giới thiệu" : "Xem giới thiệu"}
        </button>
        {isExpand && <div>Nội dung giới thiệu</div>}
      </div>
    );
  }
}

export default App;
