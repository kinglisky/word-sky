import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './components/index';
import Main from './components/main';
import NotFound from './components/not-found';

Vue.use(VueRouter);

var router = new VueRouter({
  hashbang: true,
  history: false
});
const routerMap = {
  '/': {
    name: 'login',
    component: Login
  },
  '/main': {
    name: 'main',
    component: Main
  },
  '*': {
    name: 'not-found',
    component: NotFound
  }
};

router.map(routerMap);

export default router;
