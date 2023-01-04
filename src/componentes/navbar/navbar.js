import'./navbar.css'
import'.././cartWidget/cartWidget'
import CartWidget from '.././cartWidget/cartWidget'


const Navbar = () => {
    return (
        <>
            <div className="container-navbar">
                <h1 className="title-navbar">
                    CF
                </h1>
                <div className="container-list">
                    <a>
                        Autos
                    </a>
                    <a>
                        Motos
                    </a>
                    <a>
                        Ver todo
                    </a>
                </div>
                <CartWidget/>
            </div>
        </>
    )
}
export default Navbar