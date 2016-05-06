<template>
  <div class="inputer-wrapper">
    <input v-el:input type="text" placeholder="无聊的人类啊不来一发吗？" v-model="msg" @keyup.enter="sendMsg">
    <button @click="sendMsg">SEND</button>
  </div>
</template>
<script>
import * as Getters from '../vuex/getters';
import MsgManage from '../msg-manage';
export default {
  methods: {
    sendMsg() {
      if (!this.msg) return;
      var inputData = {
        uname: this.uname,
        uid: this.id,
        content: this.msg
      };

      var danmakuData = Object.assign({
        text: inputData.uname + '： ' + inputData.content
      }, this.danmaku);

      this.msg = '';
      MsgManage.msg(inputData, danmakuData);
    }
  },

  data() {
    return {
      msg: ''
    }
  },
  vuex: {
    getters: {
      currId: Getters.currId,
      uname: Getters.uname,
      uid: Getters.uid,
      danmaku: Getters.danmaku
    }
  }
}
</script>
<style lang="less" scoped>
.inputer-wrapper {
  display: flex;
  height: 50px;
  @borderRadius: 8px;
  > * {
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
  }
  > input {
    width: 80%;
    text-align: center;
    border-right: none;
    border-radius: 0 0 0 @borderRadius;
  }
  > button {
    width: 20%;
    cursor: pointer;
    font-size: 1.1em;
    border-radius: 0 @borderRadius @borderRadius 0;
    transition: all 0.5s;
    &:hover {
      color: #00fff5;
    }
  }
}
</style>
