<template>
  <div class="msg" :class="switchClass(msg.type)">
    <span>{{msg.uname}} <i>{{ msg.date | time }}</i></span>
    <p>{{msg.content}}</p>
  </div>
</template>
<script>
const MSG_TYPE = {
  login: 'msg-login',
  me: 'msg-me',
  friend: 'msg-friend',
  leave: 'msg-leave',
  ria: 'msg-ria',
  default: 'msg-default'
};
export default {
  props: ['msg'],
  data() {
    return {};
  },

  methods: {
    switchClass(type) {
      return MSG_TYPE[type] || MSG_TYPE['default'];
    }
  },

  filters: {
    time(date) {
      return new Date(date).toLocaleTimeString();
    }
  }
}
</script>
<style lang="less" scoped>
.msg {
  margin-top: 10%;
  width: 90%;
  font-size: 12px;
  box-sizing: border-box;
  float: left;
  padding: 4%;
  border-radius: 8px;
  border-bottom: 1px dotted #fff;
  border-top: 1px dotted #fff;
  > * {
    display: block;
    word-wrap: break-word;
    width: 100%;
    padding: 2% 0;
    line-height: 2em;
  }
}

.msg-login {
  @color: #bababa;
  color: @color;
  border-bottom: 1px dotted @color;
  border-top: 1px dotted @color;
}

.msg-me {
  @color: #0ff;
  color: @color;
  float: right;
  border-bottom: 1px dotted @color;
  border-top: 1px dotted @color;
}

.msg-friend {
  @color: #caff00;
  color: @color;
  border-bottom: 1px dotted @color;
  border-top: 1px dotted @color;
}

.msg-leave {
  @color: #6a6a6a;
  color: @color;
  border-bottom: 1px dotted @color;
  border-top: 1px dotted @color;
}

.msg-ria {
  @color: #00ff89;
  color: @color;
  border-bottom: 1px dotted @color;
  border-top: 1px dotted @color;
}
</style>
