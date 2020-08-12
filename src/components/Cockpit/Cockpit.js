import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        setTimeout(() => {
            alert("Save data to cloud");
        }, 1000);
        return () => {
            console.log("[Cockpit.js] useEffect cleanup");
        };
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect 2");
        return () => {
            console.log("[Cockpit.js] useEffect2 cleanup");
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.show) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;