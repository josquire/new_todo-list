import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ['Milk', 'Eggs', 'Cheese'] };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  //***Component Lifecycle Methods***
  //componentWillMount - gets called before the component mounts and renders
  //                   - good place for ajax call to get data into the componet
  //componentDidMount - gets called after the componet mounts and renders
  //comoponentWillUpdate - before the render method gets called after a set state
  //componentDidUpdate - after the componet state updates and after the render is called
  //componentWillRecieveProps - this is called if the component is being rendered with props
  //shouldComponentUpdate - (nextProps, nextState) - called before rendering when new props
  //                                                 and state are being received

  addTodo(item) {
    this.setState({
      items: [
        item,
        ...this.state.items
      ]
    });
  }

  deleteTodo(index) {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  }

  render() {
    return(
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <List deleteTodo={this.deleteTodo} items={this.state.items} />
      </div>
    )
  }
}

export default TodoList;
