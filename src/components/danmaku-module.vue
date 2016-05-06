<template>
  <div class="danmaku-module-wrapper">
    <div class="danmaku-sets">
      <div class="left">
        <div class="item">
          <label>弹幕类型：</label>
          <input type="radio" id="mode1" value="1" v-model="danmakuSet.mode">
          <input type="radio" id="mode2" value="2" v-model="danmakuSet.mode">
          <input type="radio" id="mode4" value="4" v-model="danmakuSet.mode">
          <input type="radio" id="mode5" value="5" v-model="danmakuSet.mode">
          <input type="radio" id="mode6" value="6" v-model="danmakuSet.mode">
          <label>{{modeType[danmakuSet.mode]}}</label>
        </div>
        <div class="item">
          <label>字体大小：</label>
          <input type="text" v-model="danmakuSet.size" placeholder="12 -- 64">
        </div>
        <!-- <div class="item" v-if="+danmakuSet.mode === 4 || +danmakuSet.mode === 5">
          <label>初始透明度：</label>
          <input type="text" v-model="danmakuSet.alphaFrom" placeholder="0 -- 1">
        </div>
        <div class="item" v-if="+danmakuSet.mode === 4 || +danmakuSet.mode === 5">
          <label>终止透明度：</label>
          <input type="text" v-model="danmakuSet.alphaTo" placeholder="0 -- 1">
        </div> -->
        <div class="item">
          <label>显示边框：</label>
          <input type="checkbox" id="checkbox" v-model="danmakuSet.border">
          <label for="checkbox">{{ danmakuSet.border }}</label>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <label v-bind:style="{ color: danmakuSet.color }">弹幕颜色：</label>
          <input type="text" v-bind:style="{ color: danmakuSet.color }" v-model="danmakuSet.color" placeholder="12 -- 64">
        </div>
        <div class="color-wrapper">
          <color-picker :color.sync="danmakuSet.color"></color-picker :color.sync="danmakuSet.color">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ColorPicker from './color-picker';
import {
  setDanmaku
} from '../vuex/actions';
import {
  danmaku
} from '../vuex/getters';
const MODE_TYPE = {
  "1": "上端滚动弹幕",
  "2": "下端滚动弹幕",
  "4": "底部弹幕",
  "5": "顶部弹幕",
  "6": "逆向弹幕"
}
export default {
  components: {
    ColorPicker
  },

  data() {
    return {
      danmakuSet: {
        mode: '1',
        size: 16,
        border: false,
        color: '#fff'
      },
      modeType: MODE_TYPE,
      timer: null
    }
  },

  methods: {
    toNumHex(color) {
      return +('0x' + (color.replace('#', '')));
    },

    toStrHex(color) {
      return '#' + (color.toString(16));
    }
  },

  watch: {
    danmakuSet: {
      deep: true,
      handler: function(danmaku) {
        if (this.timer) return;
        this.timer = setTimeout(() => {
          var danmakuData = {
            mode: +danmaku.mode,
            size: +danmaku.size,
            color: this.toNumHex(danmaku.color)
          };
          this.setDanmaku(danmakuData);
          this.timer = null;
        }, 800)
      }
    }
  },

  vuex: {
    getters: {
      danmaku

    },
    actions: {
      setDanmaku
    }
  },

  ready() {
    this.$nextTick(() => {
      var danmaku = this.danmaku;
      var color = this.toStrHex(danmaku.color);
      this.danmakuSet = Object.assign({}, danmaku, {
        color: color
      });
    });
  }
}
</script>
<style lang="less" scoped>
.danmaku-module-wrapper {
  width: 100%;
  box-sizing: border-box;
  height: 450px;
  display: flex;
}

.danmaku-sets {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
}

.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  .item {
    margin: 2% auto;
    box-sizing: border-box;
    padding: 2%;
    width: 80%;
    display: flex;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    border-radius: 8px;
    // justify-content: center;
    align-items: center;
  }
  .item:nth-child(1) {
    > input {
      margin: 10px;
    }
  }
  .item:nth-child(2) {
    padding: 0;
    padding-left: 2%;
    > label {
      height: 100%;
    }
    > input {
      flex: 1;
      height: 100%;
      border: none;
      background-color: transparent;
      color: #fff;
      text-align: center;
      border-left: 1px solid #fff;
    }
  }
}

.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  .item {
    margin: 5% auto;
    box-sizing: border-box;
    padding-left: 2%;
    width: 80%;
    display: flex;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 8px;
    // justify-content: center;
    align-items: center;
    > input {
      flex: 1;
      height: 100%;
      border: none;
      color: #fff;
      background-color: transparent;
      text-align: center;
      border-left: 1px solid #fff;
    }
  }
  .color-wrapper {
    margin: 5% auto;
    box-sizing: border-box;
    width: 80%;
  }
}
</style>
