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
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
         
        </ul>
        <hr />
        <Switch>
          {/*声明接收params参数 */}
          <Route path='/home/message/detail/:id/:title' component={Detail} />
        </Switch>
      </div>
    )
  }
}
