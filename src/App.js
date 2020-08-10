import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const name = event.target.value;
    const person = {
      ...this.state.persons[id],
    };
    person.name = name;
    const persons = [
      ...this.state.persons,
    ];
    persons[id] = person;
    this.setState({
      persons: persons,
    });
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const currentValue = !this.state.showPersons;
    this.setState({ showPersons: currentValue });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons && <div>
          {this.state.persons.map((person, index) => {
            style.backgroundColor = "red";
            style[":hover"].backgroundColor = "salmon";
            return <Person name={person.name} age={person.age} changed={this.deletePersonHandler} key={index} id={index} editName={event => this.changeNameHandler(event, index)} />;
          })}
        </div>
        }
      </div>
    );
  }
}

export default App;
