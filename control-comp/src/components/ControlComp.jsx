import React, { useState } from "react";

const ControlComp = () => {
    
    const [name, setName] = useState("")

    const getData = () => {
        let t = document.getElementById("input")
        let val = t.value
        console.log(t.value)
        t.value = val
    }
    
    return(
        <>
            <div>
                <div className="border m-auto text-center p-5">
                    <input type="text"  className="shadow border shadow-slate-900" id="input"/>
                    <button onClick={getData} className="shadow rounded bg-slate-300 mx-2 px-2">Click</button>
                </div>

                <br />
                
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="boreder m-auto text-center " />
            </div>
        </>
    )
}
export default ControlComp