export function Child({props}){
    let { name, age, loc } = props;
    return(
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{loc}</h2>
        </div>
    )
}