
export default function BoughtSuccess (props) {

    return(
        <div className="successful-bought-div">
            <span>Compra finalizada con exito, tu ID de compra es: <strong>{props.orderId}</strong> </span>
        </div>
    )
}