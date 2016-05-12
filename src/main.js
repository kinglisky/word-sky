// 导入vue框架
import Vue from 'vue';
// 导入前端路由管理模块
import Router from './route';
// 入口模板文件
import App from './App';
// 工具包
import SKY from './sky';
// 浏览器样式重置
import './style/base.css';
// 字体图标
import './style/icon/style';
// 导入easejs库
import './createjs/easeljs.min';

Vue.config.debug = true;
// 启动前端路由
Router.start(App, 'app');
