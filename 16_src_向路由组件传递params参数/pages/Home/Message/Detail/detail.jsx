import React, { Component } from 'react'

const data = [
    {id:'01',content:'你好中国1'},
    {id:'02',content:'你好中国2'},
    {id:'03',content:'你好中国3'},
]

export default class detail extends Component {
  render() {
    console.log(this.props)
    const {id,title} = this.props.match.params
    const findResult = data.find((detail)=>{
        return detail.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}
