// 头部组件
import { useState } from 'react'
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

function Header() {
  const [focused, setFocused] = useState(false)
  const [nodeRef] = useState(null)
  const inputFocus = () => {
    setFocused(true)
  }
  const inputBlue = () => {
    setFocused(false)
  }
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
              <CSSTransition nodeRef={nodeRef} in={focused} timeout={200} classNames="slide">
                <Input onFocus={inputFocus} onBlur={inputBlue} className={ focused ? 'focused' : '' }></Input>
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

export default Header