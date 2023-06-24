import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './search.css'
import axios from 'axios'

export default class search extends Component {
    search =()=>{
        //获取用户的输入(连续解构赋值加重命名)
       // const {keyWordElement:{value:va}} = this
       const {value} = this.keyWordElement
       //发送请求前通知List更新状态
     /*  this.props.updateAppState({
        isFirst:false,
        isLoading:true
       })
       */
      PubSub.publish('topic',{
        isFirst:false,
        isLoading:true
       })
        //发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`
        ).then(
            response =>{
                console.log('成功了',response.data)
              /*  this.props.updateAppState(
                    {
                        isLoading:false,
                        users:response.data.items
                    })*/
                    PubSub.publish('topic',{
                        isLoading:false,
                        users:response.data.items
                    })
            },
            error=>{
              /*  this.props.updateAppState(
                    {
                        isLoading:false,
                        err:error.message
                    })
                    */
                    PubSub.publish('topic',{
                        isLoading:false,
                        err:error.message
                    })
            }
        )
    }

  render() {
    return (
     <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github users</h3>
        <div>
            <input ref={c=>this.keyWordElement=c} type="text" placeholder='enter the name you search'/>&nbsp;
            <button onClick={this.search}>Search</button>
        </div>
    </section>
    )
  }
}
