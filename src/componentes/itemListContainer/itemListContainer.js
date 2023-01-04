import'./itemListContainer.css'
const ItemListContainer = ({greeting}) => {
    return(
        <h1 className="text-list-container" >
            {greeting}
        </h1>
    )
}
export default ItemListContainer