import React from 'react';

let CharComponent = (prop) => {
    let style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        border: "1px solid #000",
    }

    let myclick = (event) => {
        console.log(event);
    }

    return (<p style={style} onClick={prop.customCharClick.bind(this, prop.index)}>{prop.charValue}</p>)
}

export default CharComponent;