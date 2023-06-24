import React, { Component } from 'react'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Footer from './Components/Footer/Footer'
import './App.css'

export default class App extends Component {
//状态在哪里 操作状态的方法就在哪里
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打代码',done:true},
    {id:'004',name:'逛街',done:true},
  ]}

  //addTodo用于添加一个todo
  addTodo = (todoObj)=>{
    //获取原todos
    const {todos} =this.state
    //追加一个todo
    const newTodos = [todoObj, ...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  changeTodo= (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //处理数据
    const newTodos = todos.map((todo)=>{
      if(todo.id ===id)return {...todo,done}
      else return todo
    })
    //更新状态值
    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    //获取状态中的todos
    const {todos} = this.state
    //处理数据
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新状态值
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //处理数据
    const newTodos = todos.map((todo)=>{
        return {...todo,done:done}
    })
     //更新状态值
     this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
    //获取状态中的todos
    const {todos} = this.state
    //处理数据
    const newTodos = todos.filter((todo)=>{
      return !todo.done
    })
    //更新状态值
    this.setState({todos:newTodos})
  }

  render() {

    const {todos} = this.state

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
            <Header addTodo={this.addTodo}/>
            <List todos={todos}  changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
