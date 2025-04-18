import React, { useMemo, useState } from "react";

const UseMemo = () => {

    const[count , setCount] = useState(0)
    const[show, setShow] = useState(false)

    let finalCount = useMemo(() => {
        return calCount(count)
    }, [count])

    function calCount(num){
        for(let i=0; i<1000000000; i++){}
        return num;
    }

    return(
        <>
            <div className="shadow w-xl p-3 mt-5 m-auto">
                <div className="p-2 border m-auto">

                <p className="m-4 text-3xl">{finalCount}</p>

                    <button type="button" onClick={() => setCount(count+1)} className="m-auto text-3xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Inc Count</button>

                    <br />
                    <br />

                    <button type="button" onClick={() => setShow(!show)} className="text-white m-auto mt-3  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{show ? "Clicked...!" : "please Click"}</button>

                </div>
            </div>
        </>
    )
}
export default UseMemo