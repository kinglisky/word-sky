<template>
  <section class="main-wrapper">
    <div class="main-panel">
      <msg-panel></msg-panel>
      <input-panel></input-panel>
    </div>
    <div class="base-panel">
      <base-panel></base-panel>
      <user-panel></user-panel>
    </div>
  </section>
</template>
<script>
import InputPanel from './input-panel';
import UserPanel from './user-panel';
import BasePanel from './base-panel';
import MsgPanel from './msg-panel';
import * as Getters from '../vuex/getters';
export default {
  components: {
    InputPanel,
    UserPanel,
    BasePanel,
    MsgPanel
  },

  data() {
    return {};
  },

  created() {
    if (!this.uid) {
      this.$route.router.go('/');
    }
  },
  vuex: {
    getters: {
      uname: Getters.uname,
      uid: Getters.uid
    }
  }


}
</script>
<style lang="less" scoped>
.main-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  // justify-content: center;
  // align-items: center;
  > * {
    height: 100%;
    box-sizing: border-box;
  }
}

.main-panel {
  display: flex;
  flex-direction: column;
  width: 80%;
  border-right: none;
  > * {
    box-sizing: border-box;
  }
}

.base-panel {
  width: 20%;
}
</style>
