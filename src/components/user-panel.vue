<template>
  <div class="user-panel-wrapper">
    <div class="user-list" v-el:userlist>
      <div class="user" v-for="user in users" track-by="uid" :class="">
        <span>{{user.uname}}<i class="icon-bubble2"></i></span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  setCurrId
} from '../vuex/actions';
import {
  currId
} from '../vuex/getters';
export default {
  methods: {
    setTalkUser(event, uid) {
    }
  },

  watch: {
    users() {
      this.$nextTick(() => {
        var list = this.$els.userlist;
        list.scrollTop = list.scrollHeight;
      });
    }
  },

  vuex: {
    getters: {
      users: state => state.users,
      currId
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes pound {
  to {
    color: #f00;
  }
}
.user-panel-wrapper {
  width: 100%;
  height: 20%;
  padding: 2% 4%;
  box-sizing: border-box;
}

.user-list {
  border: 1px solid #ccc;
  height: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4%;
  overflow-y: auto;
}

.user {
  color: #afafaf;
  cursor: pointer;
  font-size: 12px;
  display: block;
  margin-top: 4%;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 2%;
  // border-bottom: 1px solid #ccc;
  transition: all 0.3s;
  > span i {
    margin-left: 4%;
  }
  &:hover {
    transform: translate3d(5px, 0, 0);
  }
  &.active {
    color: #00fff5;
  }
  .have-msg {
    > i {
      animation: pound .5s infinite alternate;
      transform-origin: center;
    }
  }
}
</style>
