import Io from 'socket.io-client';
var socket = Io({ path: '/api' });

var emit = (type, data) => {
  self.postMessage({ type, data });
};

var onEventList = ['commitLogin', 'test'];

onEventList.forEach((type) => {
  socket.on(type, (data) => {
    emit(type, data);
  });
});

self.onmessage = ({ data }) => {
  var { type, data } = data;
  socket.emit(type, data);
};

console.log('the worker in runing');
