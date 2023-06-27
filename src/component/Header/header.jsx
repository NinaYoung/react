import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class header extends Component {
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    go=()=>{
        this.props.history.go(-1)
    }
  render() {
    return (
        
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
              <button onClick={this.back}>goBack</button>
              <button onClick={this.forward}>forward</button>
              <button onClick={this.go}>go</button>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(header)

//withRouter可以加工一般组件，让一般组件具有路由组件的特性
//withRouter的返回值是一个新组建
