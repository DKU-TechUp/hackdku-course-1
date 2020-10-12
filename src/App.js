import React, { Component } from "react";
import "./App.css";

function ListHolder(){
  return (
    <div className="list-holder">
      <List name={"Homework"} listValue={["Homework", "Volunteering", "Student Work"]}/>
      <List name={"Homework"} listValue={["Volunteering", "Student Work"]}/>
      <List name={"Homework"} listValue={["Homework", "Volunteering", "Student Work", "More Homework"]}/>
    </div>
  );
}

class List extends Component {
  constructor(props){
    super();
    this.state = { numCompleted: 0 };
    this.countCompleted = this.countCompleted.bind(this);
  }

  countCompleted(change){
    this.setState((state) => ({numCompleted: state.numCompleted + change}));
  }

  render() {
    const listItems = [];
    for(const item in this.props.listValue){
      listItems.push(<ListItem value={this.props.listValue[item]} callback={this.countCompleted} key={item} />);
    }

    return (
      <div className="list">
        <h3>{this.props.name} List</h3>
        <p>Completed {this.state.numCompleted}/{this.props.listValue.length}</p>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

class ListItem extends Component{
  constructor(props){
    super();
    this.state = { color: "#000000", selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({selected: !state.selected}));
    this.setState((state) => ({
      color: state.selected ? "#D6B85C" : "#000000",
    }));
    this.props.callback(this.state.selected ? -1 : 1);
  }

  render() {
    const style = {
      color: this.state.color,
    };

    return (
      <li className="no-select" onClick={this.handleClick} style={style}>{this.props.value}</li>
    );
  }
}

export default ListHolder;
