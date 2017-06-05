# express

> 技术栈：express、mongodb、log4js（日志管理）、react、react-router、redux、服务端渲染、代码分割(code-split)

> 所有包版本为2017.5.20的最新版本

## 安装

安装mongodb

创建数据库，`mongo`，`use express` ，修改配置文件`./models/mongodb.js`为`mongoose.connect('mongodb://localhost/express');`

启动mongodb，如`mongod --dbpath d:/MongoDB/Server/3.4/data/db`（查询mongodb，`mongo`，`db.lists.find()`）

npm install nodemon -g

npm install

## 启动

npm run webpack

npm test

## 调试

使用nodemon开发调试

访问[http://localhost:3000](http://localhost:3000)


## 问题

官网说明：
> Code-splitting + server rendering
> We’ve tried and failed a couple of times. What we learned:
> You need synchronous module resolution on the server so you can get those bundles in the initial render.
> You need to load all the bundles in the client that were involved in the server render before rendering so that the client render is the same as the server render. (The trickiest part, I think its possible but this is where I gave up.)
> You need asynchronous resolution for the rest of the client app’s life.
> We determined that google was indexing our sites well enough for our needs without server rendering, so we dropped it in favor of code-splitting + service worker caching. Godspeed those who attempt the server-rendered, code-split apps.

在这个项目中使用了server-render + code-split，如果刷新了一个路由如`http://localhost:3000/login`将导致一个问题：服务端渲染的页面与客户端渲染的初始页面不一致，因为/login组件的代码被分割出来并异步加载到页面中，所以在客户端/login第一次渲染的是一个空组件，第二次渲染的是与服务端一致的正常组件，因此刷新页面时服务端与客户端没有同构而抛出错误并闪一下。

但是，这不是致命错误，在生产环境中这个错误将被隐藏，如果不刷新并不会存在这个错误