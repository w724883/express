# express

> 项目架构express、mongodb、log4js（日志管理）、react、react-router、redux、服务端渲染

> 所有包版本为2017.5.20的最新版本

## 安装
安装mongodb

启动mongodb， `mongod --dbpath d:/MongoDB/Server/3.4/data/db`（查询mongodb，`mongo`，`db.lists.find()`）

创建数据库，`mongo`，`use express` ，修改配置文件./models/mongodb.js，`mongoose.connect('mongodb://localhost/express');`

npm install nodemon -g

npm install

## 启动

npm start

## 调试

使用nodemon开发调试

访问[http://localhost:3000](http://localhost:3000)
