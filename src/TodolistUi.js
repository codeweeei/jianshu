import { Input,Button,List } from 'antd';

const TodoListUi = (props) => {
  return (
    <div className="container">
        <Input 
          value={props.inputValue} 
          placeholder="To do list" 
          style={{width: '300px', 'marginRight': '10px'}}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleSubmit}>提交</Button>
        <List 
          style={{'marginTop': '10px', width: '300px'}} 
          bordered dataSource={props.list} 
          renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
        ></List>
      </div>
  )
}

export default TodoListUi

// export default class TodoListUi extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Input 
//           value={this.props.inputValue} 
//           placeholder="To do list" 
//           style={{width: '300px', 'marginRight': '10px'}}
//           onChange={this.props.handleInputChange}
//         ></Input>
//         <Button type="primary" onClick={this.props.handleSubmit}>提交</Button>
//         <List 
//           style={{'marginTop': '10px', width: '300px'}} 
//           bordered dataSource={this.props.list} 
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         ></List>
//       </div>
//     )
//   }
// }
