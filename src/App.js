import React, { Component } from "react";
import "./App.css";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h1>List for {this.props.name}</h1>
        <ul>
          <li>Homework</li>
          <li>Volunteering</li>
          <li>Student Work</li>
        </ul>
      </div>
    );
  }
}

class Block extends React.Component {
  constructor(props) {
    this.state = { color: "#EADAAC", selected: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.selected = !this.state.selected;
    this.setState((state) => ({
      color: this.state.selected ? `#D6B85C` : "#EADAAC",
    }));
    this.props.callback(this.state.selected);
  }

  render() {
    const style = {
      backgroundColor: this.state.color,
    };

    return (
      <div className="block" style={style}>
        <text className="noselect" onClick={this.handleClick}>
          {this.props.value}
        </text>
      </div>
    );
  }
}

export default List;
