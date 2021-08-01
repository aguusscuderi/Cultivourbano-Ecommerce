import ItemCount from './ItemCount';

function ItemListContainer(props) {

    return(
        <ItemCount stock = "5" initial = "1"  onAdd = {(counter, stock, cartCounter) => {
            if(counter <= stock ){
                cartCounter.innerHTML = counter
            }else{
                console.log('no hay stock')
            }
        }}/>
    )
}

export default ItemListContainer