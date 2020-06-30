import React from 'react';

function onKeyUp(event) {
    console.log("Changing", event.target.value)
}

const TextBox = (props) => (
    <div>
        <label>
            {props.label}
            <input type="text" onChange={props.change} value={props.value}/>
        </label>
    </div>
);

export default TextBox;