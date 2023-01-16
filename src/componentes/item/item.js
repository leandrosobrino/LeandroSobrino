import './item.css'
import { Link } from 'react-router-dom'
const Item =({name,img, price,id }) =>{
    return (
        <div>
            <h1>
                {name}
            </h1>
            <img src={img} alt={name}  />
            <p>${price}</p>
            <Link to={`/item/${id}`} >ver detalle</Link>
        </div>
    )
}
export default Item