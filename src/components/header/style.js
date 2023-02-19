import styled from 'styled-components'
import logo from '../../assets/img/logo.png'
const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
`

const HeaderWrapper = styled.div`
  height: 60px;
  max-width: 1440px;
  margin: 0 auto;
  color: #909090;
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
`
const Input = styled.input.attrs({
  placeholder: '探索稀土掘金'
})`
  position: relative;
  border: 1px solid #8a919f;
  height: 36px;
  width: 240px;
  margin-left: 180px;
  box-sizing: border-box;
  padding: 0 70px 0 20px;
  border-radius: 4px;
	font-size: 14px;
	color: #666;
  outline: none;
  &::placeholder {
		color: #999;
	}
  &:hover {
    border-color: #515767;
  }
  &:focus {
    border-color: #1e80ff;
  }
  &.focused {
    width: 400px;
  }
  &.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 400px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 240px;
	}
`
const InputIcon = styled.div`
  position: absolute;
  top: 3px;
  right: 4px;
  width: 44px;
  background: #f2f3f5;
  border-radius: 2px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.focused {
    background: #eaf2ff;
  }
  .focused {
    color: #1e80ff;
    font-weight: blod;
  }
`

const Button = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  height: 36px;
  margin-left: 20px;
`

const Logo = styled.a.attrs({
  href: '/'
})`
  display: inline-block;
  height: 24px;
  width: 130px;
  margin-right: 22px;
  background: url(${logo}) no-repeat;
  background-size: contain;
`

const NavBar = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

const NavBarItem = styled.div`
  color: #8a919f;
  width: 52px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #515767;
  }
  &.vipNav {
    width: 60px;
    margin-right: 20px;
    &:hover {
      .vip {
        color: #515767;
      }
      .text {
        color: #515767;
      }
    }
  }
  &.noticeNav {
    margin-right: 10px;
  }
  .avater {
    color: #8a919f;
    font-size: 32px;
    &:hover {
      color: #515767;
    }
  }
  .notice {
    color: #8a919f;
    font-size: 25px;
    &:hover {
      color: #515767;
    }
  }
  .text {
    margin-left: 6px;
  }
  .vip {
    color: #8a919f;
    font-size: 16px;
  }
`

export {
  HeaderWrapper,
  Logo,
  NavBar,
  FlexBox,
  HeaderBox,
  NavBarItem,
  Input,
  InputContainer,
  InputIcon,
  Button
}