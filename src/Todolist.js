import { Component } from "react";
import { Input,Button,List } from 'antd';
export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        '吃饭',
        '睡觉',
        '敲代码'
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <Input placeholder="To do list" style={{width: '300px', 'marginRight': '10px'}}></Input>
        <Button type="primary">提交</Button>
        <List style={{'marginTop': '10px', width: '300px'}} bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)}></List>
      </div>
    )
  }
}