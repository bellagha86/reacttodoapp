import React, { Component } from "react";
import './TODO.css'
class Todo extends Component {
  state = {
      clear:false,
    text: "",
    list: []
    /*isComplete: false,
      check:false*/
  };
  handleChange = t => {
    
    this.setState({
      text: t.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.clear && this.state.text.length){
        this.setState({
            list: [...this.state.list, { todo: this.state.text, isCompleted: false, isDeleted: false}],
            text:"",
            clear:!this.state.clear
          });
    } else {
        this.setState({
            text:"",
            clear:!this.state.clear
        })
    }
   
  };
  changeStyle=(e)=>{
      this.setState({
        isCompleted: this.state.list.map((el,i)=> i===e ? el.isCompleted = !el.isCompleted:el.isCompleted)
        })
      
  }
  deleteTask=(e)=>{
    this.setState({
      isDeleted: this.state.list.map((el,i)=> i===e ? el.isDeleted = !el.isDeleted:el.isDeleted)
      })
    
}

  render() {
    return (
      <div>
        <div className="header">
        <h1>TODO APP</h1>
        <p>Add New To-Do</p>
        <form onSubmit={this.handleSubmit}>
          <input
          value={this.state.text}
            placeholder="Add new To-Do"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add</button>
        </form></div>
        <h1>Let's get some work done !</h1>
        <ul className="TODOList">
          {this.state.list.map((el, i) => (
            <li key={i} className={el.isDeleted?"delete":"keep"}>
              <button onClick={()=>this.changeStyle(i)}>{el.isCompleted?"Undo":"Complete"}</button>
              <button onClick={()=>this.deleteTask(i)}>Delete</button>
              <span className={el.isCompleted?"done":"undone"}>{el.todo}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
