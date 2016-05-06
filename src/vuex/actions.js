// 初始化设置用户数据
export const setUser = ({ dispatch, state }, udata) => {
  dispatch('SET_USER', udata);
};

export const updateMsg = ({ dispatch, state }, data) => {
  dispatch('UPDATE_MSG', data);
};

// 更新用户列表
export const initUsers = ({ dispatch, state }, data) => {
  dispatch('INIT_USERS', data);
};

export const updateUsers = ({ dispatch, state }, data) => {
  dispatch('UPDATE_USERS', data);
};

export const setCurrId = ({ dispatch, state }, data) => {
  dispatch('SET_CURR_ID', data);
};

export const removeUser = ({ dispatch, state }, data) => {
  dispatch('REMOVE_USER', data);
};

export const setDanmaku = ({ dispatch, state }, data) => {
  dispatch('SET_DANMAKU', data)
};

export const setModuleId = ({ dispatch, state }, data) => {
  dispatch('SET_MODULE_ID', data)
};

export const updateImgs = ({ dispatch, state }, data) => {
  dispatch('UPDATE_IMGS', data)
};

export const removeImgs = ({ dispatch, state }, data) => {
  var todo = () => {
    dispatch('REMOVE_IMGS');
    setTimeout(() => {
      todo();
    }, 3000);
  };
  todo();
};
