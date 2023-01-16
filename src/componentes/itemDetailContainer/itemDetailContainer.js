import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../itemDetail/itemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
    },[productId])

    return (
      
        <div>
            <h1>
                detalle de productos
            </h1>
            <ItemDetail {...product} />
        </div>
      
    )
}
export default ItemDetailContainer