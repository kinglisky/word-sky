export default {
  SET_USER(state, data) {
    state.uname = data.uname;
    state.uid = data.uid;
  },

  SET_CURR_ID(state, data) {
    state.currId = data;
  },

  UPDATE_MSG(state, data) {
    if (state.msgs.length > 50) {
      state.msgs.shift();
    }
    state.msgs.push(data);
  },

  UPDATE_USERS(state, data) {
    state.users.push(data);
  },

  INIT_USERS(state, data) {
    state.users = state.users.concat(data);
  },

  REMOVE_USER(state, data) {
    var users = state.users;
    var it = users.find((it) => {
      return it.uid === data;
    });
    var index = users.indexOf(it);
    if (index !== -1) {
      users.splice(index, 1);
    }

    if (state.currId === data) {
      state.currId = 'default';
    }
  },

  SET_DANMAKU(state, data) {
    state.danmaku = data;
  },

  SET_MODULE_ID(state, data) {
    state.moduleId = data;
  },

  UPDATE_IMGS(state,data) {
    state.imgs.push(data);
  },

  REMOVE_IMGS(state,data) {
    if (state.imgs.length && state.imgs.length > 6) {
      state.imgs.shift();
    }
  }

}
