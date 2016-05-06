import SKY from './sky';
import Store from './vuex/store';
import Storage from './storage';
import Router from './route';
import * as Actions from './vuex/actions';
export default {
  init: () => {
    SKY.on('login', (data) => {
      Actions.updateMsg(Store, data);
      Actions.updateUsers(Store, data);
    });
    SKY.on('commitLogin', ({ data, users }) => {
      var user = {
        uname: data.uname,
        uid: data.uid
      };
      Actions.initUsers(Store, users);
      Actions.updateMsg(Store, data);
      Actions.setUser(Store, user);
      Storage.set('uname', user.uname);
      Storage.set('uid', user.id);

      Router.go({
        path: '/main'
      });
    });

    SKY.on('msg', ({ data }) => {
      Actions.updateMsg(Store, data);
    });

    SKY.on('commitMsg', ({ data }) => {
      Actions.updateMsg(Store, data);
    });

    SKY.on('leave', (data) => {
      Actions.updateMsg(Store, data);
      Actions.removeUser(Store, data.uid);
    });

    SKY.on('commitSendImg', ({ data, src }) => {
      Actions.updateMsg(Store, data);
      Actions.updateImgs(Store, { uname: data.uname, date: data.date, src });
    });

  },

  riaShow: (CM) => {
    Actions.removeImgs(Store);
    SKY.on('sendImg', ({ data, src }) => {
      Actions.updateMsg(Store, data);
      Actions.updateImgs(Store, { uname: data.uname, date: data.date, src });
    });

    SKY.on('msg', ({ danmaku }) => {
      CM.send(danmaku);

    });

    SKY.on('commitMsg', ({ danmaku }) => {
      CM.send(danmaku);

    });
  },

  login: (uname) => {
    SKY.emit('login', { uname });

  },
  msg: (data, danmaku) => {
    SKY.emit('msg', { data, danmaku });
  },

  sendImg: (data) => {
    SKY.emit('sendImg', data);
  }
}
