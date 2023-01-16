import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import './itemListContainer.css'
import Itemlist from'../itemList/itemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <>
            <h1 className="text-list-container" >
                listado
            </h1>
            <div className=''>
                <Itemlist products={products} />
            </div>
        </>
    )
}
export default ItemListContainer