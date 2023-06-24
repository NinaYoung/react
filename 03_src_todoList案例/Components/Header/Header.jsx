import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './header.css'

export default class Header extends Component {

  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //键盘事件的回调
  handleKeyUp= (event)=>{
    //结构赋值获取keyCode,target
    const {keyCode,target} = event
    //判断是否是回车键
    if(keyCode !== 13) return
    //添加的todo名字不能为空
    if(target.value.trim() ===''){
      alert('输入不能为空')
      return
    }
    //准备一个对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    console.log(todoObj)
    //讲todo对象传给APP
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp}  type="text" placeholder='请输入你的名称，按回车键确认'></input>
      </div>
    )
  }
}
