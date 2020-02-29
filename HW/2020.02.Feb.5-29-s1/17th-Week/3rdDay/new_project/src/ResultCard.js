import React from 'react'

export default function ResultCard(propss) {
    return (
        <div>
            <p>Grade: {propss.grade}</p>
            <p>Name of lecture : {propss.lecture} </p>
            <p>And the score {propss.score}</p>
        </div>
    )
}