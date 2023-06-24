import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './list.css'

export default class List extends Component {

  static propTypes = {
    todos:PropTypes.array.isRequired,
    changeTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  
  render() {
    const {todos,changeTodo,deleteTodo} = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map(todo=>{
            // return  <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
            return  <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>
          })
        }
       
      </ul>
    )
  }
}
