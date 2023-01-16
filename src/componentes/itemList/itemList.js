import Item from'../item/item'

const Itemlist = ({products}) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default Itemlist