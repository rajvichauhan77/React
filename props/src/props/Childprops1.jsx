import React from "react";
import { Childprops } from "./Childprops";
export const Childprops1 = ({item, list, num, status}) =>{

    const {title, price, rate} = item;


    return (
        <div>  
 
        <div className="row">
                    <div className="col-lg-8  mt-4 g-3 d-flex">
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{price}</p>
                            <span className="badge text-bg-secondary">⭐{rate}</span>
                            <br/>
                            <br/>
                            <a href="#" class="btn btn-secondary">More <span className="badge text-bg-light">{num}</span></a>
                        </div>
                    </div>
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{price}</p>
                            <span className="badge text-bg-secondary">⭐{rate}</span>
                            <br/>
                            <br/>
                            <a href="#" class="btn btn-secondary">More <span className="badge text-bg-light">{num}</span></a>
                        </div>
                    </div>
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{price}</p>
                            <span className="badge text-bg-secondary">⭐{rate}</span>
                            <br/>
                            <br/>
                            <a href="#" class="btn btn-secondary">More <span className="badge text-bg-light">{num}</span></a>
                        </div>
                    </div>
            </div>
        </div>
     </div>
    )
}