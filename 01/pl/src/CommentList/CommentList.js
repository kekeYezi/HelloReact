import React from 'react'
import './CommentList.css';

class CommentList extends React.Component {

    constructor () {
        super() 
        this.state = {
            userValue:"",
            contentValue:"",
            msg:[
                {id:1, user:"小明", content:"haha"},
                {id:2, user:"小明2", content:"hah433a"},
                {id:3, user:"小明3", content:"haha1212"}
            ]
        };
    }

    renderList() {
        if(this.state.msg.length) {
            return (

            this.state.msg.map(item=> {
               return(
                <ul key={item.id}>
                    <li className="user">评论人:{item.user}</li>
                    <li className="content">评论内容:{item.content}</li> 
                </ul>
               )
            })
            )
        } else {
            return <div className="noData">暂无数据</div>
        }
    }

    render () {
        return(
            <div className="box">
                <input  
                name="userValue"
                placeholder="请输入用户页面:" 
                value={this.state.userValue}
                onChange={this.handleChange}
                ></input>
                <textarea 
                name="contentValue"
                placeholder="请输入评论内容:"
                value={this.state.contentValue}
                onChange={this.handleChange}
                ></textarea>
                <button onClick={this.sendpl}>发布评论</button>
                <button onClick={this.clearpl}>清空评论</button>
            
            {this.renderList()}
            </div>
            
        )
    };

    handleChange = (e) => {
        const {name , value} = e.target
        this.setState({
            [name]:value
        })
    }

    sendpl = () => {
        const content = {
            id: +new Date(),
            user:this.state.userValue,
            content:this.state.contentValue
        }
        this.setState({
            msg:[content, ...this.state.msg]
        })
    }

    clearpl = () => {
        this.setState({
            msg:[]
        })
    }

}

export default CommentList;