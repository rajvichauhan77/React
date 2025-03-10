import React from "react";

 export function User({data}){
    return(

        <div className="container row g-3">
        {
            data.map((ele) => ( 
            <div className="col-3">

            <div className="card" >
            <img src={ele.picture.large} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ele.name.first} {ele.name.last}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
             </div>

            </div>
            ))
        }

        </div>

       
    )
 }
