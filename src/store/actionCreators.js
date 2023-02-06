import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes"
// 统一创建actions
export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
}
// 正常
export const getTodoList = () => {
  return (dispatch) => {
    return new Promise(resolve => {
      let data = [
        '吃饭',
        '睡觉'
      ]
      const action = initListAction(data)
      dispatch(action)
    })
  }
}