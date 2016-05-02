<template>
  <div class="inputer-wrapper">
    <input type="text" placeholder="无聊的人类啊不来一发吗？">
    <button>SEND</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
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
