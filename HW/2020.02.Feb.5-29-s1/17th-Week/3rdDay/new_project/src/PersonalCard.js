import React from 'react'

// function clickMe() {
//     console.log('component clicked');
// }


export default function PersonCard(props) {
    
    return (
        <div>
        <p onClick = {props.click}>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
    )
}