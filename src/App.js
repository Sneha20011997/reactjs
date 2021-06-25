/*import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Default text"
    };
  }

  handleBtnClick = () => {
    this.setState({
      demo: "State has been changed"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.demo}</h1>
        <h2>Click on the button to see some magic happen!</h2>
        <button onClick={this.handleBtnClick}>Click Me</button>
      </div>
    );
  }
}

export default App;*/


import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 0,
      another: "Hello",
      something: {
        val1: "Value 1",
        val2: "Value 2"
      }
    };
  }

  // state -> variable

  handleBtnClick = () => {
    this.setState({
      something: {
        ...this.state.something,
        val1: "New Value"
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
       
        <h1>{this.state.something.val1}</h1>
        <h1>{this.state.something.val2}</h1>
        <h2>Click on the button to see some magic happen!</h2>
        <button onClick={this.handleBtnClick}>Click Me</button>
      </div>
    );
  }
}

export default App;

