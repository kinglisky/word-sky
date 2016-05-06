<template>
  <div class="msg-panel-wrapper">
    <div class="imgs-wrapper">
      <image-wall></image-wall>
    </div>
    <div class="msg-panel abp">
      <div class="container" v-el:wrapper></div>
    </div>
  </div>
</template>
<script>
import '../ccl/ccl.min';
import DeImg from '../de-img';
import * as Getters from '../vuex/getters';
import MsgManage from '../msg-manage';
import CCL from '../ccl/CommentCoreLibrary';
import ImageWall from './image-wall';
export default {
  components: {
    ImageWall
  },
  data() {
    return {
      CM: null
    };
  },
  ready() {
    var CM = this.CM;
    this.$nextTick(() => {
      CM = new CCL.CommentManager(this.$els.wrapper);
      CM.init();
      CM.start();
      CM.time(1000);
      MsgManage.riaShow(CM);
    });
  }
}
</script>
<style lang="less" scoped>
.msg-panel-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 2%;
  z-index: 0;
}

.imgs-wrapper {
  z-index: 1020;
  position: absolute;
  width: 96%;
  height: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.msg-panel {
  z-index: -1;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
}
</style>
