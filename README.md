# myNode
## 第三次视频
1、目前后台可以处理静态资源(html、css、js、jpg)以及相应ajax请求。
2、当response的头部写上`"Content-Type":"application/json"`时，在ajax请求返回的数据里面，jquery会自动将json格式的字符串
转成数据原来的形式，因此不用再调用`JSON.parse(data)`
3、JSON是目前前后端交互的基本格式
4、静态资源由原来的同步变成promise来实现异步。
5、学习Promise,
