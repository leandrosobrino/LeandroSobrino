import './App.css';
import Navbar from'./componentes/navbar/navbar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import Mantenimiento from'./img/1.png'

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <div className="container-img-Mantenimiento" >
          <img src={Mantenimiento} />
          <ItemListContainer greeting='En Mantenimiento' />
      </div>
    
    </div>
    </>  
  );
}

export default App;
