<template>
  <div class="base-panel-wrapper">
    <div class="msg-list"></div>
  </div>
</template>
<script>
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
  &:after {
    @bwidth: 40px;
    content: '';
    position: absolute;
    bottom: -@bwidth;
    left: 50%;
    margin-left: -@bwidth /2;
    border: @bwidth/2 solid transparent;
    border-top: @bwidth/2 solid #fff;
    border-left-width: none;
    border-right-width: none;
    border-bottom-width: none;
  }
}
</style>
