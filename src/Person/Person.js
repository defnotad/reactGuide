import React from "react";


const person = (props) => {
    const style = {
        "@media(min-width: 500px)": {
            width: "450px",
        }
    };

    return (
        <div className="Person" style={style}>
            <p> I'm {props.name} and I'm {props.age} years old, {props.children}</p >
            <input type="text" value={props.name} onChange={props.editName} />
            <button type="button" onClick={() => props.changed(props.id)}>Delete</button>
        </div>
    );
}

export default person;