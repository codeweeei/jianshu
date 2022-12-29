import { Component,Fragment } from 'react'

class App extends Component {
  render() {
    return (
      // Fragment 占位符
      <Fragment>
        <h3>代办事项</h3>
        <div><input style={{marginRight: '10px'}}></input><button>提交</button></div>
        <ul>
          <li>吃</li>
          <li>睡</li>
          <li>玩</li>
        </ul>
      </Fragment>
    )
  }
}

export default App;
