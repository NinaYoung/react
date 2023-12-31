import React, { Component } from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Detail from './Detail/detail'

export default class message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }

  pushShow = (id,title)=>{
    //push跳转，携带param参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push跳转，携带search参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

     //push跳转，携带state参数
    //  this.props.history.push(`/home/message/detail`,{id,title})
  }

  replaceShow = (id,title)=>{
    //replace跳转，携带param参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    //replace跳转，携带search参数
    this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    //replace跳转，携带state参数
    // this.props.history.replace(`/home/message/detail`,{id,title})
  }
  render() {
    const {messageArr} = this.state

    return (
      <div>
        <ul>
          {
             messageArr.map((msgObj)=>{
              return (
                <li key={msgObj.id}>
                  {/*向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  {/*向路由组件传递search参数 */}
                  {/*push模式：浏览器留痕迹，回退可回退回去 */}
                  <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;

                  {/*向路由组件传递state参数 */}
                  {/*replace模式：浏览器不留痕迹 */}
                  {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  &nbsp;&nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                  &nbsp;&nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                  </li>
              )
            })
          }
         
        </ul>
        <hr />
        <Switch>
          {/*声明接收params参数 */}
          {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}

          {/*search参数无需声明接收，正常注册路由即可 */}
          <Route path='/home/message/detail' component={Detail} />

            {/*state参数无需声明接收，正常注册路由即可 */}
          {/* <Route path='/home/message/detail' component={Detail} />  */}

        </Switch>
      </div>
    )
  }
}
