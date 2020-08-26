import React from 'react';

const TextBox = (props) => (
    <div>
        <label>
            {props.label}
            <input type="text" onChange={props.change} value={props.value}/>
        </label>
    </div>
);

export default TextBox;