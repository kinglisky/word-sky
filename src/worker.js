import Io from 'socket.io-client';
var socket = Io({ path: '/api' });

var emit = (type, data) => {
  self.postMessage({ type, data });
};
var onListener = (events) => {
  events.forEach((type) => {
    socket.on(type, (data) => {
      emit(type, data);
    });
  });
};


// 只有自己能接受的广播
var userEvents = ['commitLogin', 'commitMsg','commitSendImg'];

// 服务端的广播事件
var broadcastEvents = ['login', 'msg','leave','sendImg'];

onListener(userEvents);
onListener(broadcastEvents);

self.onmessage = ({ data }) => {
  var { type, data } = data;
  socket.emit(type, data);
};

console.log('the worker in runing');
