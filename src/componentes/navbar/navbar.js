import './navbar.css'
import '.././cartWidget/cartWidget'
import CartWidget from '.././cartWidget/cartWidget'
import Logo from '../../img/logoSM.jpeg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                <div className="container-search-logo-carrito">
                    <div className="container-search"></div>
                    <div className="container-img-logo">
                        <Link to='/'>
                            <img className="img-logoSM" src={Logo} />
                        </Link>


                    </div>

                    <CartWidget />
                </div>

                <div className="container-list">
                    <Link to='/'> inicio</Link>
                    <Link to='/category/SUV'> Suv</Link>
                    <Link to='/category/Sedan'> Sedan</Link>

                </div>

            </div>
        </>
    )
}
export default Navbar