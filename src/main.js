import Vue from 'vue';
import Router from './route';

//app.vue
import App from './App';
// 工具包
import SKY from './sky';

// 字体图标
import './style/icon/style';


// 安装全局通用的组件
Vue.use({
  install(Vue) {
    Vue.prototype.SKY = SKY;
  }
});

Router.start(App, 'app');
