export default function CartDetail(props) {
    console.log('ola llegue',props)
    return(
        <>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.quantityToBuy}</h2>
            </div>
          
        </>
    )
}