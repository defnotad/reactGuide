import React, { Component } from "react";

import Person from "../Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps", props);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate", prevProps, prevState);
    }

    componentDidUpdate() {
        console.log("[Persons.js] componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount");
    }

    render() {
        console.log("[Persons.js] component");
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                click={() => this.props.delete(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.change(event, person.id)} />
        });
    }
}

export default Persons;