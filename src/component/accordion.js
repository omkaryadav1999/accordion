import React, { useState } from "react";
import { UserData } from "./dataAPI";
import Myaccordion from "./Myaccordion";
import "./acordion.css"
function Accordion() {
    const [data, setData] = useState(UserData);

    return (
        <>
            <section className="sectionData">
             <div className="title"><h2>question Answer section</h2></div>
                {data.map((item) => {
                    const { id } = item;
                    return <Myaccordion key={id} {...item} />
                })}
            </section>
        </>
    )
}

export default Accordion