import "./App.css";

import "./style.css";

import React, { Component } from "react";

import cx from "classnames";

export default class App extends Component {
  state = {
    toDoList: [],
    isFilter: "all",
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const val = e.target.todo.value;
    const toDo = this.state.toDoList;
    toDo.push({ title: val, isDone: false, id: Date.now() });
    this.setState({ toDoList: toDo });
    e.target.todo.value = "";
    console.log(this.state);
  };

  handelDelete = (idToDel) => {
    const toDo = this.state.toDoList;
    const indexItem = toDo.findIndex((item) => item.id === idToDel);
    toDo.splice(indexItem, 1);
    this.setState({ toDoList: toDo });
  };

  handelDone = (index) => {
    const toDo = this.state.toDoList;
    toDo[index].isDone = !this.state.toDoList[index].isDone;
    this.setState({ toDoList: toDo });
  };

  handelFilter = (type) => {
    this.setState({ isFilter: type });
  };

  render() {
    return (
      <div>
        <div className="App">
          <form onSubmit={this.handelSubmit}>
            <input type="text" name="todo" />
            <button type="submit">add list</button>
          </form>
        </div>
        {this.state.toDoList
          .filter((item) => {
            const filter = this.state.isFilter;
            console.log(item);
            if (filter === "done") {
              return item.isDone;
            }
            if (filter === "undone") {
              return !item.isDone;
            }
            return true;
          })
          .map((toDo, index) => {
            return (
              <div key={index}>
                <div className={cx({ done: toDo.isDone })}>
                  {toDo.title}
                </div>
                <button onClick={() => this.handelDone(index)}>
                  {toDo.isDone ? "done" : "undone"}
                </button>
                <button onClick={() => this.handelDelete(toDo.id)}>
                  delete
                </button>
              </div>
            );
          })}
        <button onClick={() => this.handelFilter("done")}>Filter Done</button>
        <button onClick={() => this.handelFilter("undone")}>
          Filter UnDone
        </button>
        <button onClick={() => this.handelFilter("all")}>all list</button>
      </div>
    );
  }
}
