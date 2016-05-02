<template>
  <section class="input-panel-wrapper">
    <function-panel solt="body"></function-panel>
    <inputer></inputer>
  </section>
</template>
<script>
import FunctionPanel from './function-panel';
import Inputer from './inputer';
export default {
  components: {
    FunctionPanel,
    Inputer
  },
  data() {
    return {};
  },
}
</script>
<style lang="less" scoped>
.input-panel-wrapper {
  width: 100%;
  height: 20%;
  padding: 1% 2%;
  box-sizing: border-box;
  // border: 1px solid #ccc;
}
</style>
