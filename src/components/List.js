import React, { Component } from 'react';

class List extends Component {
  render() {
    let items = this.props.items.map( (item, index)  => {
      return(<li key = {`item-${index}`} className='card'>
               {item}
              <br/> <button className='btn' onClick={() => this.props.deleteTodo(index)}>X</button>
             </li>);
    })
    return(
      <div className='row'>
        <ul style={ styles.itemsList } >
          { items }
        </ul>
      </div>
    )
  }
}

const styles = {
  itemsList: {listStyle: 'none' }
}

export default List;
