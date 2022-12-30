import { createStore } from 'redux'
import reducer from './reducer'
// 创建 store 同 reducer
const store = createStore(reducer)


export default store