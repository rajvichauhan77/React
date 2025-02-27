import { useState } from 'react'
import { Childprops } from './Childprops'


export function Props(){

    const [num, setNum] = useState(0)


    let obj = {
        title : "Sugar",
        price : 100,
        rate : 4.9
    }

    

 return(
     
    <>

    <Childprops email="rajvi30@gmail.com" name="rajvi" num="{num}"/>

    <button onClick={() => setNum(num+1)}>+</button>
    <button>{num}</button>

    <button onClick={() => setNum(num-1)}>-</button>

    </>
 )

}