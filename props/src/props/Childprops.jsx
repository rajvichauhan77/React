import React from "react";

export const Childprops = ({email, name, num}) => {

    return(

        <nav class="navbar bg-body-tertiary my-5">
        <div class="container-fluid">
          <a class="navbar-brand">Props</a>
          <form class="d-flex" role="search">
            
            <button class="btn btn-sm btn-outline-dark" type="submit">{num}</button>
          </form>
        </div>
      </nav>

    )

}