import React from 'react';
import './App.css';

function List() {
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

export default List;
