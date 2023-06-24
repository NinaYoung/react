import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {

  handleAllChecked= (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
    const totalCount = todos.length

    return (
      <div className='todo-footer'>
        <label>
            <input type='checkbox' onChange={this.handleAllChecked}
            checked={doneCount===totalCount &&totalCount !==0 ? true:false}/>
        </label>
        <span>
            <span>已完成{doneCount}</span>/全部{totalCount}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
