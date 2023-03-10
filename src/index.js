// react程序的入口
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './assets/icon/iconfont.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root')); // 将React组件挂载在页面的某个节点下（id为root的节点）
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
