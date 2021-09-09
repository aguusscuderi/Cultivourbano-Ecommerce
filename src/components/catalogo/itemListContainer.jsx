
import ItemList from './ItemList';

function ItemListContainer() {
    
    return(
        <>
        <div className="row">
			<div className="in-sm-12 in-md-8 in-lg-8">
				<div className="row row-products">
                    
                    <ItemList/>
                 
				</div>
			</div>
			<div className="in-sm-12 in-md-4 in-lg-4">
                <h3>FILTROS</h3>
			</div>
		</div>
        </>
    )
}

export default ItemListContainer