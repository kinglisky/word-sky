<template>
  <router-view class="view" transition="go" transition-mode="out-in"></router-view>
</template>
<script>
import store from './vuex/store';
import MsgManage from './msg-manage';
export default {
  store,
  created() {
    MsgManage.init();
  }
}
</script>
<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.view {
  transition: all .5s ease;
}

.go-enter,
.go-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}

::-webkit-scrollbar {
  width: 0px;
}

::-moz-scrollbar {
  width: 0px;
}

::-ms-scrollbar {
  width: 0px;
}

::-o-scrollbar {
  width: 0px;
}


/* ::-webkit-scrollbar-track-piece {
  background-color: #eee;
  margin: -2px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
  min-height: 50px;
  min-width: 50px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:vertical:hover {
  background: transparent;
}

::-webkit-scrollbar-thumb:horizontal:hover {
  background: #555555
} */
</style>
