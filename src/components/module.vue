<template>
  <div class="module-wrapper">
    <canvas-module v-if="moduleId === 1"></canvas-module>
    <image-module v-if="moduleId === 2"></image-module>
    <danmaku-module v-if="moduleId === 3"></danmaku-module>
  </div>
</template>
<script>
import CanvasModule from './canvas-module';
import ImageModule from './image-module';
import DanmakuModule from './danmaku-module';
import * as Getters from '../vuex/getters';
export default {
  components: {
    CanvasModule,
    ImageModule,
    DanmakuModule
  },
  vuex: {
    getters: {
      moduleId: Getters.moduleId
    }
  }

}
</script>
<style lang="less" scoped>
.module-wrapper {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
}
</style>
