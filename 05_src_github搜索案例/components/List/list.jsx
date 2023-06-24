import React, { Component } from 'react'
import './list.css'

export default class list extends Component {

  render() {
    const {users,isFirst,isLoading,err} = this.props
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
