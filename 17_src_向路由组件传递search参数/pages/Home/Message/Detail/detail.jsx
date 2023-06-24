import React, { Component } from 'react'
import qs from 'qs'

const data = [
    {id:'01',content:'你好中国1'},
    {id:'02',content:'你好中国2'},
    {id:'03',content:'你好中国3'},
]

export default class detail extends Component {
  render() {
    console.log(this.props)
    //接收params参数
    // const {id,title} = this.props.match.params

     //接收search参数
     const {search} = this.props.location
     const {id,title} = qs.parse(search.slice(1))
     console.log(id+title)
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
