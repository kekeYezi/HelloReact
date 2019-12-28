# HelloReact
React学习记录

记录前端技术栈的学习

## 01

函数组件，类组件，表单绑定，受控组件，this指向解决，简单demo。

问题：

箭头函数语法

```
handleChange = (e) => {
        const {name , value} = e.target
        this.setState({
            [name]:value
        })
    }
```

容易忽略 this.state 直接取值、

列表渲染模式 不清晰

```
this.state.msg.map(item=> {
               return(
                <ul key={item.id}>
                    <li className="user">评论人:{item.user}</li>
                    <li className="content">评论内容:{item.content}</li> 
                </ul>
               )
            })
```

插件安装不完全

css基础

