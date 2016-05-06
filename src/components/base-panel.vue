<template>
  <div class="base-panel-wrapper">
    <div class="msg-list" v-el:msglist>
      <msg v-if="msgs.length" v-for="msg in msgs" :msg="msg" track-by="$index">
      </msg>
    </div>
  </div>
</template>
<script>
import Msg from './msg';
import {
  msgs
} from '../vuex/getters';
export default {
  components: {
    Msg
  },

  watch: {
    msgs() {
      this.$nextTick(() => {
        var list = this.$els.msglist;
        list.scrollTop = list.scrollHeight;
      });
    }
  },

  vuex: {
    getters: {
      msgs
    }
  }
}
</script>
</script>
<style lang="less" scoped>
.base-panel-wrapper {
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  padding: 8% 4%;
}

.msg-list {
  border: 1px solid #fff;
  border-radius: 8px;
  height: 100%;
  position: relative;
  padding: 4%;
  box-sizing: border-box;
  overflow: auto;
  transition: all 0.5s;
}
</style>
