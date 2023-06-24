import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './search.css'
import axios from 'axios'

export default class search extends Component {
    search = async()=>{
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
    //    //fetch发送网络请求（未优化版）
    //    fetch(`https://api.github.com/search/users?q=${value}`).then(
    //         response=>{
    //             console.log('联系服务器成功了')
    //             return response.json()
    //         },
    //         error=>{
    //             console.log('联系服务器失败了',error)
    //             return new Promise(()=>{})
    //     }
    //    ).then(
    //         response=>{console.log("获取数据成功",response)},
    //         error=>{console.log("获取数据失败",error)}
    //    )

    //    //fetch发送网络请求（优化版）
    //    fetch(`https://api.github.com/search/users?q=${value}`).then(
    //         response=>{
    //             console.log('联系服务器成功了')
    //             return response.json()
    //         }
    //    ).then(
    //         response=>{console.log("获取数据成功",response)} 
    //    ).catch(
    //         error=>{console.log("请求出错",error)}
    //    )
        
       try{
        const response = await fetch(`https://api.github.com/search/users?q=${value}`)
        const data = await response.json()
        PubSub.publish('topic',{
                            isLoading:false,
                            users:data.items
                        })
       }catch(error){
        console.log("请求出错",error)
        PubSub.publish('topic',{
                            isLoading:false,
                            err:error.message
                        })
       }
        

        //axios发送网络请求
        // axios.get(`https://api.github.com/search/users?q=${value}`
        // ).then(
        //     response =>{
        //         console.log('成功了',response.data)
        //       /*  this.props.updateAppState(
        //             {
        //                 isLoading:false,
        //                 users:response.data.items
        //             })*/
        //             PubSub.publish('topic',{
        //                 isLoading:false,
        //                 users:response.data.items
        //             })
        //     },
        //     error=>{
        //       /*  this.props.updateAppState(
        //             {
        //                 isLoading:false,
        //                 err:error.message
        //             })
        //             */
        //             PubSub.publish('topic',{
        //                 isLoading:false,
        //                 err:error.message
        //             })
        //     }
        // )
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
