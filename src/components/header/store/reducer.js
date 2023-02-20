import * as constants from './constants'
import { fromJS } from 'immutable'
// 默认数据
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    // immutable的get会结合原来的state和新设置的属性及值，生成一个新的对象
    return state.set('focused', true)
  }
  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}