import React from 'react';
import CharComponent from "./CharComponent";

let CharContainer = (prop) => {
    return (<div>
        {prop.fieldValue.split('').map((letter, index) => {
            return (<CharComponent key={index} index={index} charValue={letter} customCharClick={prop.charClick.bind(this, index)}/>)
        })}
    </div>)
}

export default CharContainer;