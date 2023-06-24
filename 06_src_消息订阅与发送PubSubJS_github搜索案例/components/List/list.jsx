import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './list.css'

export default class list extends Component {

  state = {
    users:[],//初始化数据
    isFirst:true,//标识是否为第一次打开
    isLoading:false,//标识是否处于加载中
    err:'',//存储请求相关的错误信息
  }

  componentDidMount(){
     this.token =  PubSub.subscribe("topic",(_,data)=>{

      })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
            isFirst?<h2>Enter the name you search</h2> :
            isLoading? <h2>Loading.....</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users && users.map((user)=>{
                return (
                    <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                    <img alt='head_portrait' src={user.avatar_url} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
            </div>
                )
            })
        }   
      </div>
    )
  }
}
