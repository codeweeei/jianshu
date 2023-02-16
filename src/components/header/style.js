import styled from 'styled-components'
const HeaderWrapper = styled.div`
  height: 58px;
  background: red;
`
const NavBar = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`
export {
  HeaderWrapper,
  NavBar
}