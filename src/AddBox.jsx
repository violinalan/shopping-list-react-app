import React from 'react'

function AddBox(props) {
    return (
        <div>
            <input type="text" onChange={props.onAddBoxChange} value={props.addBoxValue} />
            <select onChange={props.onDateChange} value={props.dateValue}>
                <option value=""></option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <button type="button" onClick={props.onAddItem}>Add</button>
        </div>
        
    );
}

export default AddBox