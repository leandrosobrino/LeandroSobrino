import Carrito from'../../img/carrito.png'
import'./cartWidget.css'

const CartWidget = () => {
    return (
       <div className="container-carrito">
            <img className="img-carrito" src={Carrito} />
            <p>
                32
            </p>
            
       </div>
    )
}
export default CartWidget