import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    let item = this.refs.item.value;
    this.props.addTodo(item);
    this.refs.itemForm.reset();
  }

  render () {
    return(
      <div className='container'>
        <form className='input-form' ref='itemForm' onSubmit={this.addTodo}>
          <input  ref='item' type='text' placeholder='New To Do' required />
          <input type='submit' className='btn'/>
        </form>
      </div>
    )
  }
}

export default TodoForm;
