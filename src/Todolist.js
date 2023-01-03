import { Component } from "react";
import store from "./store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreators";
import TodoListUi from "./TodolistUi";
import axios from 'axios'
export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 订阅store变化，避免数据更改视图不更新
  }
  handleStoreChange() {
    // 更新状态——视图跟数据同步
    this.setState(store.getState())
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  // 提交新增todo
  handleSubmit() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  // 删除某项todo
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUi 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleItemDelete={this.handleItemDelete}
      ></TodoListUi>
    )
  }
  componentDidMount() {
    axios.get('./data.json').then(res => {
      const data = res.data
      store.dispatch({
        type: 'xxx',
        data
      })
    })
  }
}