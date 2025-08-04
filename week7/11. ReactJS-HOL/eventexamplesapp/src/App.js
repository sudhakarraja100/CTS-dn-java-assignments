import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';
class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! You clicked the increment button.");
  };

  sayWelcome = (msg) => {
    alert(`Message: ${msg}`);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: 10 }}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>OnPress</button>
        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
