import React from 'react';
function Button(props) {
    function handleClick(event) {
        props.onClick(event);

    }
    return(
        <button data-testid={props.testid} onClick={handleClick}>{props.name}</button>
    )

}
export default Button