<template>
  <div class="image-module-wrapper">
    <div class="input-module">
      <input class="url-input" v-model="imgUrl" type="text" placeholder="可以贴图片url地址或上传本地图片">
      <div class="file-input">
        <label>OPEN</label>
        <input type="file" v-el:file @change="setImgFile">
      </div>
      <button @click="sendImg">SEND</button>
    </div>
    <div class="show-module">
      <img v-el:img src="../assets/default.jpeg" height="574" width="800">
    </div>
  </div>
</template>
<script>
var createUrl = (() => {
  return window.createObjectURL || window.URL.createObjectURL || window.webkitURL.createObjectURL || alert('浏览器器太LOW了，该换了');
})();
import ToImgUrl from '../de-img';
import * as Getters from '../vuex/getters';
import MsgManage from '../msg-manage';
export default {
  methods: {
    sendImg() {
      if (!this.imgSrc) return alert('请输入图片或等待图片加载完成');
      
      var data = {
        data: {
          uid: this.uid,
          uname: this.uname
        },
        src: this.imgSrc
      };
      MsgManage.sendImg(data);
    },
    setImgFile() {
      var imgFile = this.$els.file.files[0];
      if (imgFile) {
        this.imgUrl = imgFile.name;
        this.imgFile = imgFile;
        var url = this.getImgSrc(imgFile);
        ToImgUrl.run(url, (src) => {
          this.imgSrc = src;
        });
        this.$els.img.src = url;
      }
    },

    getImgSrc(source) {
      var type = source.type.substr(0, 5);
      if (type !== 'image') return console.log('老大要图片啦！');
      return this.createUrl(source);
    },

    createUrl


  },

  watch: {
    imgUrl(url) {
      var reg = /[a-zA-z]+:\/\/[^\s]*/g;
      if (reg.test(url)) {
        this.imgSrc = url;
        this.$els.img.src = url;
      }
    }
  },

  data() {
    return {
      imgUrl: '',
      imgFile: '',
      imgSrc: ''
    };
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
.image-module-wrapper {
  width: 100%;
  box-sizing: border-box;
  > div {
    width: 80%;
    // border: 1px solid #ccc;
    margin: 5% auto;
  }
}

.input-module {
  display: flex;
  height: 40px;
  @borderRadius: 8px;
  > * {
    background-color: transparent;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
  }
  .url-input {
    width: 60%;
    border-radius: @borderRadius 0 0 @borderRadius;
    font-size: 13px;
  }
  .file-input {
    width: 100px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-left: none;
    border-right: none;
    &:hover {
      > label {
        color: #00f5ff;
      }
    }
    > label {
      font-size: 13px;
      display: block;
      width: 100%;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      transition: all 0.5s;
    }
    > input {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
  button {
    width: 100px;
    cursor: pointer;
    border-radius: 0 @borderRadius @borderRadius 0;
    transition: all 0.5s;
    &:hover {
      color: #00f5ff;
    }
  }
}

.show-module {
   max-height: 300px;
   overflow-y: auto;
  > img {
    display: block;
    width: 100%;
  }
}
</style>
