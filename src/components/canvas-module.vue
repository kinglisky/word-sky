<template>
  <div class="canvas-module-wrapper">
    <canvas class="canvas" v-el:canva width="800" height="450"></canvas>
    <div class="btns">
      <div class="funs-wrapper">
        <div class="stroke-btn">
          <input type="text" v-model="stroke" placeholder="请输入画笔大小">
          <label>大小</label>
        </div>
        <div class="color-btn">
          <input type="text" v-model="color" placeholder="请输入画笔颜色">
          <label v-bind:style="{ backgroundColor: color }">颜色</label>
        </div>
        <div class="color-select">
          <color-picker :color.sync="color"></color-picker>
        </div>
        <button @click="clearCanvas">CLEAR</button>
        <button @click="sendGraffiti">SEND</button>
      </div>
    </div>
  </div>
</template>
<script>
import DeImg from '../de-img';
import * as Getters from '../vuex/getters';
import MsgManage from '../msg-manage';
import ColorPicker from './color-picker';
export default {
  components: {
    ColorPicker
  },
  methods: {
    init() {
      var canvas = this.$els.canva;
      var stage = new createjs.Stage(canvas);
      this.stage = stage;
      stage.autoClear = false;
      stage.enableDOMEvents(true);

      createjs.Touch.enable(stage);
      createjs.Ticker.setFPS(24);

      var drawingCanvas = new createjs.Shape();
      this.drawingCanvas = drawingCanvas;

      stage.addEventListener("stagemousedown", this.handleMouseDown);
      stage.addEventListener("stagemouseup", this.handleMouseUp);

      var title = new createjs.Text("点击拖动画笔", "20px Arial", "#777777");
      this.title = title;
      title.x = 300;
      title.y = 200;
      stage.addChild(title);

      stage.addChild(drawingCanvas);
      stage.update();
    },
    handleMouseDown(event) {
      var stage = this.stage;
      if (!event.primary) {
        return;
      }
      if (stage.contains(this.title)) {
        stage.clear();
        stage.removeChild(this.title);
      }
      this.oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
      this.oldMidPt = this.oldPt.clone();
      stage.addEventListener("stagemousemove", this.handleMouseMove);
    },

    handleMouseMove(event) {
      if (!event.primary) {
        return;
      }
      var stage = this.stage;
      var oldPt = this.oldPt;
      var oldMidPt = this.oldMidPt;
      var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

      this.drawingCanvas.graphics.clear().setStrokeStyle(this.stroke, 'round', 'round').beginStroke(this.color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

      oldPt.x = stage.mouseX;
      oldPt.y = stage.mouseY;

      oldMidPt.x = midPt.x;
      oldMidPt.y = midPt.y;

      stage.update();
    },

    handleMouseUp(event) {
      if (!event.primary) {
        return;
      }
      this.stage.removeEventListener("stagemousemove", this.handleMouseMove);
    },

    clearCanvas() {
      this.stage.clear();
    },

    sendGraffiti() {
      var canvas = this.$els.canva;
      this.$nextTick(() => {
        DeImg.toSrc(canvas, (src) => {
          var data = {
            data: {
              uid: this.uid,
              uname: this.uname
            },
            src: src
          };
          MsgManage.sendImg(data);
        });
      });
    }

  },

  data() {
    return {
      stage: null,
      drawingCanvas: null,
      oldPt: null,
      oldMidPt: null,
      title: null,
      color: '#0ff',
      stroke: 10,
    };
  },

  ready() {
    this.$nextTick(() => {
      this.init();
    });
  },

  vuex: {
    getters: {
      uname: Getters.uname,
      uid: Getters.uid
    }
  }
}
</script>
<style lang="less" scoped>
.canvas-module-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
}

.canvas {
  display: block;
}

.btns {
  // border: 1px solid #f00;
  flex: 1;
  display: flex;
  justify-content: center;
  // align-items: center;
}

.funs-wrapper {
  width: 100%;
  > * {
    width: 80%;
    display: block;
    height: 40px;
    margin: 5% auto;
  }
  > button {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: all 0.5;
    border: 1px solid #ccc;
    border-radius: 8px;
    &:hover {
      color: #0ff;
    }
  }
  .color-btn,
  .stroke-btn {
    height: 40px;
    display: flex;
    > * {
      display: block;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      background-color: transparent;
      color: #fff;
      line-height: 40px;
      text-align: center;
      border: 1px solid #ccc;
    }
    > input {
      width: 60%;
      border-right: none;
      border-radius: 8px 0 0 8px;
    }
    > label {
      width: 40%;
      border-radius: 0 8px 8px 0;
    }
  }
  .color-select {
    display: block;
    height: 100px;
    display: flex;
  }
}
</style>
