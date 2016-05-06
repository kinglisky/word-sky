<template>
  <div class="img-wall-wrapper">
    <div class="img-list">
      <div class="img-wrapper" v-for="it in imgs" track-by="date">
        <p>来自{{ it.uname }}的图片</p>
        <img v-bind:src="it.src" @click="showImg(it.src)">
      </div>
    </div>
    <div class="img-show" v-show="show">
      <img src="../assets/default.jpeg" height="574" width="800" v-el:showimg>
      <div @click="close"><i class="icon-cross"></i></div>
    </div>
  </div>
</template>
<script>
import {
  updateImgs,
  removeImgs
} from '../vuex/actions';
import {
  imgs
} from '../vuex/getters';
export default {
  methods: {
    showImg(src) {
      this.$nextTick(() => {
        this.$els.showimg.onload = () => {
          this.show = true;
        };
        this.$els.showimg.src = src;
      });
    },

    close() {
      this.show = false;
    }
  },

  data() {
    return {
      show: false
    }
  },
  vuex: {
    getters: {
      imgs
    },
    actions: {
      updateImgs,
      removeImgs
    }
  }
}
</script>
<style lang="less" scoped>
.img-wall-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1030;
}

.img-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}

.img-wrapper {
  width: 20%;
  max-height: 50%;
  margin: 2%;
  overflow: hidden;
  > p {
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    font-size: 12px;
    line-height: 2em;
    display: block;
  }
  > img {
    display: block;
    width: 100%;
    cursor: pointer;
    z-index: 1040;
  }
}

.img-show {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  overflow-y: auto;
  > img {
    display: block;
    width: 100%;
  }
  > div {
    position: absolute;
    right: 0;
    top: 0;
    padding: 1%;
    cursor: pointer;
    transition: all 0.5s;
    color: #0ff;
    &:hover {
      color: #f00;
    }
  }
}
</style>
