import React, { useState } from 'react'
import "./acordion.css"
const Myaccordion = ({ question, Answer }) => {
    const [state, setState] = useState(false);

    return (
        <>
            <div className='qestionSection'>
                <p onClick={() => setState(!state)} className="pointer">{state ? "➖" : "➕"}</p> &nbsp;
                <h5>{question}</h5>
            </div>
            <p className='answer'>
                {state && Answer}
            </p>
        </>
    )
}

export default Myaccordion