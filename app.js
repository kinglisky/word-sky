var koa = require('koa');
var app = koa();
var serve = require('koa-static');

// 指向静态文件文件夹
if (process.env.NODE_ENV === 'production') {
  app.use(serve('./dist'));
}

// 必须放在在所有app.user()之后
var server = require('http').Server(app.callback());
var io = require('socket.io')(server, { path: '/api' });
var userNum = 0;
var users = [];
var usersMap = {};
io.on('connection', (socket) => {

  socket.on('login', (data) => {
    var uname = data.uname;
    var uid = socket.id;
    users.push({
      uname: uname,
      uid: uid
    });
    usersMap[uid] = uname;
    userNum = users.length;
    data['type'] = 'login';
    data['uid'] = socket.id;
    data['date'] = +new Date();
    data['content'] = '欢迎加入聊天室，当前在线人数为：' + userNum;
    socket.emit('commitLogin', { data: data, users: users });

    data['content'] = '加入聊天室，当前在线人数为：' + userNum;
    socket.broadcast.emit('login', data);
  });

  socket.on('msg', (data) => {
    var msgData = data.data;
    var danmaku = data.danmaku;
    var date = +new Date();
    var commitData = Object.assign({ type: 'me', date: date }, msgData);
    var rmsgData = Object.assign({ type: 'friend', date: date }, msgData);
    socket.broadcast.emit('msg', { data: rmsgData, danmaku: danmaku });
    danmaku['border'] = true;
    socket.emit('commitMsg', { data: commitData, danmaku: danmaku });
  });


  socket.on('sendImg', (data) => {
    var date = +new Date();
    var commitData = Object.assign({ type: 'me', date: date, content: '发送了一张图片' }, data.data);
    var rdata = Object.assign({ type: 'friend', date: date, content: '不屑与你讲话，并向你发送了一张图片' }, data.data);
    socket.emit('commitSendImg', { data: commitData, src: data.src });
    socket.broadcast.emit('sendImg', { data: rdata, src: data.src });
  });

  socket.on('disconnect', () => {
    var uid = socket.id;
    users = users.filter((it) => {
      return it.uid !== uid;
    });
    userNum = users.length;
    var data = {
      type: 'leave',
      uid: uid,
      uname: usersMap[uid],
      date: +new Date(),
      content: '离开了聊天室，当前在线人数为' + userNum
    };
    socket.broadcast.emit('leave', data);
  });

});

var port = process.env.VCAP_APP_PORT || 3000;
server.listen(port, () => {
  console.log('the server run in the 3000');
});
