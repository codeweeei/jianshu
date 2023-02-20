# 仿简书项目学习记录

## 头部组件

- 头部 logo 图片的引入

```js
import styled from 'styled-components'
import xxx from '../../logo.png'
// 注意react引入的组件名都得大写
export const Logo = styled.a.attrs({
	// 设置 a 标签的属性
	href: '/',
})`
	background: url(${xxx});
	background-size: contain;
`
export const NavBar = styled.div`
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
`
```

### iconfont 的引入

- 项目全局引入 iconfont css 类名

```js
import { injectGlobal } from 'styled-components'
injectGlobal`
  @font-face {
    //...
  }
  .iconfont {
    //...
  }
`
```

### 头部搜索框动画

- 数据改变->页面改变：通过 input 聚焦状态变量 focused 来动态给 input 设置 class，进而对其 width 进行更改时添加上动画过渡
- 动画可以使用 react-transition-group 中的 CSSTransition

```js
<CSSTransition in={this.state.focused} timeout={200} className='side'>
	<Search />
</CSSTransition>
```

会在 Search 上挂载如下样式：

- side-enter
- side-enter-active
- side-exit
- side-exit-active

### redux 管理组件数据

将 focused 放置 redux 进行管理

- redux-devtools-extension 插件的引入：https://github.com/zalmoxisus/redux-devtools-extension

```js
import { createStore, compose } from 'redux'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())
export default store
```

react-redux 的引入
reducer 里如果存放过多的逻辑或代码，就会变得不好维护，因此需要进行 reducer 的拆分

- reducer 的拆分，再利用 combineReducers 进行组合

```js
import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'
export default combineReducers({
	header: headerReducer,
})
```

- 创建 actionCreator 来创建 action，并将 action 的类型用常量表示
- 使用 immutable.js 库来管理 store 里的数据（不修改原来的 state，返回新的 state）
- 使用 redux-immutable 库来管理 state 数据
- 使用 redux-thunk ＋ ajax 在 action 进行网络请求(异步)

## npm 包

### styled-components

- https://www.npmjs.com/package/styled-components
  css 文件：style 后缀 -> js 后缀
  样式的组件化，生成样式组件，避免不同文件之间 css 的污染

### normalize.css

- 统一代码样式在不同浏览器的统一

### react-transition-group

- 动画插件
- https://reactcommunity.org/react-transition-group/

### Ajax

- 网络请求插件
