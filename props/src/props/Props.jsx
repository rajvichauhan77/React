import { useState } from 'react'
import { Childprops } from './Childprops'
import { Childprops1 } from './Childprops1'


export function Props(){

    const [num, setNum] = useState(0)


    let obj = {
        title : "Sugar",
        price : 100,
        rate : 4.9
    }

    let arr = [1,2,3]

    let warn ={
        err : "this is error", 
        status : 404    
    }
    

 return(
     
    <>

    <Childprops email="rajvi30@gmail.com" name="rajvi" num="{num}"/>

    <button onClick={() => setNum(num+1)}>+</button>
    <button>{num}</button>

    <button onClick={() => setNum(num-1)}>-</button>

    <Childprops1 item={obj} list={arr}{...warn} num={num}/>
    </>
 )

}