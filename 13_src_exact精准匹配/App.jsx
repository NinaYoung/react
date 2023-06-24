import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import About from './pages/About/about'
import Home from './pages/Home/home'
import MyNavLink from './component/MyNavLink/myNavLink'

import './app.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='list-group'>
              {/* 原生html中，靠<a>跳转不同页面 */}
              {/* <a className='list-group-item' href='./about.html'>About</a>
              <a className='list-group-item' href='./home.html'>Home</a> */}
            
              {/* 在React中，靠路由链接实现切换组件 ---编写路由链接*/}
              
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home/a'>Home</MyNavLink>
              
              </div>
          </div>
        </div>

        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              {/* 注册路由  Switch标签可以做到path和Component一对一   exact开启路由精准匹配*/}
              <Switch>
                <Route path='/about' component={About}/>
                <Route exact={true} path='/home' component={Home}/>
              </Switch>
                
              
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}
