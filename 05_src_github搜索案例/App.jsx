import React, { Component } from 'react'
import Search from './components/Search/search'
import List from './components/List/list'

export default class App extends Component {

  state = {
    users:[],//初始化数据
    isFirst:true,//标识是否为第一次打开
    isLoading:false,//标识是否处于加载中
    err:'',//存储请求相关的错误信息
  }
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }
  

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
