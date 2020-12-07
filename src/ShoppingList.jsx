import React from 'react'

function ShoppingList(props) {
    let list = props.itemList
        .filter(entry => (props.filterDateValue === "" || props.filterDateValue === entry.due))
        .map(entry => {
        return (
            <li>
                {entry.itemName} {entry.due ? 'due ' + entry.due : ''} 
                <button type="button" onClick={() => props.onDelete(entry.itemName)}>Delete</button>
                <button type="button" onClick={() => props.onEdit(entry.itemName)}>Edit</button>
            </li>
        );
    });
    
    return (
        <ul>
            {list}
        </ul>
    )
}

export default tes