import React from "react";

export const Childprops = ({email, name, num}) => {

    return(

        <nav className="navbar bg-body-tertiary my-5">
        <div className="container-fluid">
          <a className="navbar-brand">Props</a>
          
            <button className='btn btn-sm btn-outline-dark' type="submit">{num}</button>
          
        </div>
      </nav>

    )

}