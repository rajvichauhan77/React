export function Parent({props}){

    return(
        <div>
            {
                props.map(ele => <h2>{ele}</h2>)
            }
        </div>
    )
}