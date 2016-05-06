<template>
  <div class="color-picker-wrapper">
    <div class="picker" v-el:picker></div>
    <div class="slider" v-el:slider></div>
  </div>
</template>
<script>
import '../colorpicker/colorpicker';
export default {
  props: {
    color: {
      towWay: true
    }
  },

  watch: {
    color(color) {
      this.colorpicker.setHex(color);
    }
  },

  data() {
    return {
      colorpicker: null
    }
  },
  ready() {
    this.$nextTick(() => {
      var picker = this.$els.picker;
      var slider = this.$els.slider;
      this.colorpicker = ColorPicker(slider, picker, (hex, hsv, rgb) => {
        this.color = hex;
      });
      this.colorpicker.setHex('#0ff');
    });
  }
}
</script>
<style lang="less" scoped>
.color-picker-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100px;
  display: flex;
  border: 1px solid #fff;
  border-radius: 8px solid #fff;
  overflow: hidden;
  > * {
    border: 1px solid #000;
  }
}

.picker {
  width: 90%;
  height: 100%;
  cursor: crosshair;
  border-radius:8px 0 0 8px;
  border-right: none;
}

.slider {
  width: 10%;
  height: 100%;
  cursor: move;
}
</style>
