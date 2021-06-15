import React from 'react';
function SelectDropdown(props,onSelectChange) {
    function handleChange(event) {
        props.onSelectChange(event);
    }
    return(
    <select data-testid={props.testid} id={props.id} onChange={handleChange}> {
        props.params.map((elem,index) => (
            <option value={elem}>{elem}</option>
        ))
    }
    </select>
    )
}
export default SelectDropdown