import ItemCount from './ItemCount';
import ItemList from './ItemList';



function ItemListContainer() {

    return(
        <>
        <ItemCount stock = "5" initial = "1"  onAdd = {(counter, stock, cartCounter) => {
            if(counter <= stock ){
                cartCounter.innerHTML = counter
            }else{
                console.log('no hay stock')
            }
        }}/>

        <ItemList />
        </>
    )
}

export default ItemListContainer