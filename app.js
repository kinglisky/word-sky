var koa = require('koa');
var app = koa();
// var serve = require('koa-static');

// // 指向静态文件文件夹
// app.use(serve('./dist'));

// 必须放在在所有app.user()之后
var server = require('http').Server(app.callback());
var io = require('socket.io')(server, { path: '/api' });
var userIndex = 0;

io.on('connection', (socket) => {
  console.log('hava user join:', userIndex);
  socket.on('login', (data) => {
  	console.log('have user login:',data);
    socket.emit('commitLogin', { uid: socket.id });
  });
});


server.listen(3000, () => {
  console.log('the server run in the 3000');
});
