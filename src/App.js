import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react';

import Navbar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import Mantenimiento from './img/1.png'
import ItemDetailContainer from './componentes/itemDetailContainer/itemDetailContainer';

function App() {
 /*  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch('https://api.mercadolibre.com/sites/MLA/search?q=casa')

      .then(response => {
        return response.json()
      })

      .then(json => {
        setProducts(json.results)
      })

  }, [])
 */
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
          </Routes>

   
        </BrowserRouter>
       {/* 
          <div className="container-img-Mantenimiento" >
            <img src={Mantenimiento} />
            <ItemListContainer greeting='En Mantenimiento' />
          </div> */}
         
       {/*  <div>
        {products.map(prod => {
          return (
            <div key={prod.id}>
              <h1>{prod.title}</h1>
              <img src={prod.thumbnail}  alt={prod.title}/>
              <h3>${prod.price}</h3>
            </div>
          )
        })}
        </div> */}
      </div>
    </>
  );
}

export default App;
