import React, { Component } from 'react'
import MyNavLink from '../../component/MyNavLink/myNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './News/news'
import Message from './Message/message'

export default class home extends Component {
  render() {
    return (
      <div>
        <h3>Home的展示区</h3>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/message' />
          </Switch>
        </div>
      </div>
      
    )
  }
}