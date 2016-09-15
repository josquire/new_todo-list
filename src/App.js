import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>{this.props.name} Sticky Notes</h2>
          <TodoList />
        </div>

      </div>
    );
  }
}

export default App;
