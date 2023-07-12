import React, { Fragment } from "react";

const TestInput = (props) => {
    console.log(props)
    return (
        <Fragment>
            <label htmlFor="toDo" className="text-light confortaa p-1"></label>
            <input
            className="bg-secondary text-light confortaa"
            type="text"
            id="toDo"
            placeholder="what needs to be done?"
            value={props.data}
            onChange={props.handleChange}
            onKeyDown={props.handleKeyDown}
            />
        </Fragment>)
}

export default TestInput;