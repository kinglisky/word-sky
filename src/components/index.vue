<template>
  <div class="login-wrapper">
    <bg></bg>
    <div class="input-wrapper">
      <input type="text" placeholder="请输入您的昵称" v-model="userName" @keyup.enter="setUserName">
      <button @click="setUserName">JOIN IN</button>
    </div>
  </div>
</template>
<script>
import bg from './bg';
import Router from '../route';
export default {
  components: {
    bg
  },

  data() {
    return {
      userName: null
    };
  },

  methods: {
    setUserName() {
      if (this.userName) {
        this.SKY.emit('login', {
          userName: this.userName
        });
        this.SKY.on('commitLogin', (data) => {
          console.log('login ok', data);
          Router.go({
            path: '/main'
          });
        });
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-wrapper {
  z-index: 10;
  width: 40%;
  height: 50px;
  display: flex;
  margin-top: -10%;
  > * {
    display: block;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #fff;
    color: #fff;
    background-color: transparent;
  }
  > input {
    font-size: 1em;
    text-align: center;
    flex: 0 0 80%;
    border-right: none;
    color: #fff;
    border-radius: 8px 0 0 8px;
  }
  > button {
    flex: 0 0 20%;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      font-size: 1.2em;
    }
  }
}
</style>
