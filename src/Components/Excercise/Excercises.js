import React from 'react'
import Excercise from './Excercise.js'

export default function Excercises( {excercises}) {
    console.log(excercises)
    return (
        <div>
            {excercises.map((exc, index) => <Excercise exc={exc} key={index} />
            )}
        </div>

    )
}
