import Vue from 'vue';
import Vuex from 'vuex';
import state from './states';
import mutations from './mutations';

// 告诉 vue “使用” vuex
Vue.use(Vuex);
// 通过 new Vuex.Store 结合初始 state 和 mutations，创建 store
// 这个 store 将和我们的 vue 应用链接起来
export default new Vuex.Store({
  state,
  mutations
})
