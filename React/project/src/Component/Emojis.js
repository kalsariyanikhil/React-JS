import React from 'react'

let x = "😃";
let y = "😃";
let z = "😃";

function Emojis() {
    let text = ""
    if (x === y && y === z) {
            text = "This Is Matchig Emojis"
    } else {
        text = "This Is Not Matchig Emojis"
    }
    return (
        <>
        <div className='p-5' ></div>
            <div >
                <h1 className='border-2 py-3 bg-yellow-600 border-white'>{x}{y}{z}</h1>
                <h1>{text}</h1>
            </div> 
        </>
    )
}

export default Emojis
