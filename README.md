# 简单的即时在线聊天室

姑且算是我的毕业设计，发5天写的（真是赶鸭子上架，汗。。。。）


* 1 先把后台服务开起来 node app.js
* 2 npm run dev

就基本的几个功能：聊天、涂鸦、图片与弹幕

基本环境用的webpack 搭建的，本着学习vue的目的做的，前端主要用的vue、vue-router、vuex，弹幕模块用的是[这个](https://github.com/jabbany/CommentCoreLibrary)。其他的图片与涂鸦实现还是很简单的。后台用的koa + Socket.io......