import React, {Component} from 'react';

class ValidationComponent extends Component {

    render(props) {
        let style =  {
            display: "none",
            color: "red"
        }
        let errorText;
        let fieldValueLength = this.props.fieldValue.length;
        if (fieldValueLength <= 5) {
            errorText = "Text is too short.";
            style.display = "block";
        } else if (fieldValueLength > 10) {
            errorText = "Text is too long.";
            style.display = "inline-block";
        } else {
            style.display = "none";
        }

        return (<p style={style}>Error on field: "{this.props.fieldName}" with value "{this.props.fieldValue}". {errorText}" </p>);
    }
}

export default ValidationComponent;