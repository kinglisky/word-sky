<template>
  <div>
    <div class="container">
      <div><h1 class="wran">请输入您的昵称</h1></div>
      <div></div>
      <div></div>
    </div>
    <canvas v-el:stage class="noise-stage" id="canv"></canvas>
  </div>
</template>
<script>
export default {
  methods: {
    noise() {
      var px = this.px;
      var context = this.context;
      var width = Math.random() * 1000 | 0;
      var height = Math.random() * 1000 | 0;
      for (var i = 0; i < px.length; i += 4) {
        var col = (Math.random() * 255) + 50;
        px[i] = col;
        px[i + 1] = col;
        px[i + 2] = col;
      }
      context.putImageData(this.imgData, 0, 0);
      requestAnimationFrame(this.noise)
    }
  },
  data() {
    return {
      width: 400,
      height: 300,
      stage: null,
      context: null,
      imgData: null,
      px: null
    }
  },
  ready() {
    var stage = this.$els.stage;
    var context = stage.getContext('2d');
    var width = this.width;
    var height = this.height;
    stage.width = width;
    stage.height = height;
    context.fillStyle = 'hsla(255,255%,255%,1)';
    context.fillRect(0, 0, width, height);
    context.fill();
    this.stage = stage;
    this.context = context;
    this.imgData = context.getImageData(0, 0, width, height);
    this.px = this.imgData.data;
    this.noise();
  }
}
</script>
<style scoped>
.noise-stage {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: "proxima-nova", "Gotham", Helvetica, "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", "YouYuan", "幼圆", serif;
}
.wran {
  z-index: 3;
  color: #ccc;
  position: absolute;
  font: bold 5vw "proxima-nova", "Gotham", Helvetica, "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", "YouYuan", "幼圆", serif;
  left: 50%;
  top: 50%;
  margin-top: -10vh;
  width: 100%;
  margin-left: -50%;
  height: 10vw;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 30px hsla(0, 0%, 0%, .5);
  animation: flicks .8s linear infinite;
}
.container {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(ellipse at center, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0) 19%, hsla(0, 0%, 0%, 0.9) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#e6000000', GradientType=1);
}

.container div {
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: hsla(0, 0%, 0%, .09);
  box-shadow: 0 0 10px hsla(0, 0%, 0%, .2);
  animation: waves 12s linear infinite;
}

.container div:nth-child(1) {
  animation-delay: 0;
}

.container div:nth-child(2) {
  animation-delay: 4s;
}

.container div:nth-child(3) {
  animation-delay: 8s;
}

@keyframes waves {
  0% {
    top: -20%;
  }
  100% {
    top: 100%;
  }
}
@keyframes spanflicks {
  0% {
    text-shadow: 0 0 30px hsla(0, 0%, 0%, .5);
  }
  33% {
    color: hsla(0, 0%, 0%, .4);
    text-shadow: 0 0 10px hsla(2, 95%, 15%, .5);
  }
  66% {
    color: transparent;
    text-shadow: 0 0 20px hsla(2, 95%, 15%, .2);
  }
  100% {
    color: hsla(0, 0%, 0%, .5);
    text-shadow: 0 0 40px hsla(2, 95%, 15%, .1);
  }
}
</style>
