这是一个非常简单的React网页跳转。

## 如何使用

`npm install`安装依赖库，`npm start`启动，默认地址为[http://localhost:3000](http://localhost:3000)

## 网页跳转

主要通过`react-router-dom`库来实现，可以在主页[http://localhost:3000](http://localhost:3000) 和聊天板[http://localhost:3000/chat](http://localhost:3000/chat) 之间跳转。  
路由通过`BrowserRouter`组件实现，而跳转的链接则通过`Link`组件实现。
