
## 数组-知识补充
`for in` 为何这么慢
for in 是第一个能够迭代对象键的JavaScript语句
循环对象键({})与数组([])上进行循环不同
因为引擎会执行一些额外的工作来跟踪已经迭代的属性

## 堆栈
几个实际的堆栈实例
- 浏览器操作记录
- 撤销操作
- 递归及其他
## 队列
前端领域: 浏览器/NodeJs中关于宏任务和微任务
后端: 消息队列

## 链表
Redux以链表方式构建其中的逻辑
React核心算法 React Fiber的实现就是链表
在服务器上, 像Express这样Web框架也以类似的方式构建中间件逻辑.但当请求被接受时, 它从一个中间件管道输送到下一个, 直到响应被发出



[中高级前端」窥探数据结构的世界- ES6版](https://juejin.im/post/5cd1ab3df265da03587c142a)
[JavaScript 算法与数据结构](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)

