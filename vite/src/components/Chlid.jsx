export function Child({props}){
    const { name, surname, loc} = props;
    return(
        <div>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h2>{loc}</h2>
        </div>
    )
}