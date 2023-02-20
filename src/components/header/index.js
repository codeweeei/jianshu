// 头部组件
import { createRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { 
  HeaderWrapper, 
  Logo, 
  NavBar, 
  NavBarItem, 
  FlexBox, 
  HeaderBox, 
  Input, 
  InputContainer, 
  InputIcon,
  Button
} from "./style"

function Header(props) {
  // const [focused, setFocused] = useState(false)
  let { focused, inputFocus, inputBlur } = props
  const inputRef = createRef()
  return (
    <HeaderBox>
      <HeaderWrapper>
        <NavBar>
          {/* 左：nav区域 */}
          <FlexBox>
            <Logo></Logo>
            <NavBarItem>首页</NavBarItem>
            <NavBarItem>沸点</NavBarItem>
            <NavBarItem>课程</NavBarItem>
            <NavBarItem>直播</NavBarItem>
            <NavBarItem>活动</NavBarItem>
            <NavBarItem>竞赛</NavBarItem>
            <NavBarItem>商城</NavBarItem>
            <NavBarItem>APP</NavBarItem>
            <NavBarItem>插件</NavBarItem>
            <InputContainer>
              <CSSTransition nodeRef={inputRef} in={focused} timeout={200} classNames="slide">
                <Input ref={inputRef} onFocus={inputFocus} onBlur={inputBlur} className={ focused ? 'focused' : '' }></Input>
              </CSSTransition>
              <InputIcon className={ focused ? 'focused' : '' }>
                <i className={ focused ? 'iconfont icon-sousuo focused' : 'iconfont icon-sousuo'}></i>
              </InputIcon>
            </InputContainer>
            <Button>
              <Dropdown.Button
                icon={<DownOutlined />}
                type="primary"
              >
                创作者中心
              </Dropdown.Button>
            </Button>
          </FlexBox>
          {/* 右：功能区 */}
          <FlexBox>
            <NavBarItem className="vipNav">
              <i className="vip iconfont icon-huiyuanguanli"></i>
              <div className="text">会员</div>
            </NavBarItem>
            <NavBarItem className="noticeNav">
              <i className="notice iconfont icon-tongzhi"></i>
            </NavBarItem>
            <NavBarItem>
              <i className="avater iconfont icon-yonghutouxiang"></i>
            </NavBarItem>
          </FlexBox>
        </NavBar>
      </HeaderWrapper>
    </HeaderBox>
  )
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused // 将store里的header里的focused映射到组件的props上 
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    inputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 