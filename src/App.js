import './App.css';
import './customCss.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//BrowserRouter -> Envuelve todo lo que quiero que vaya a usar enrutado
//Routes -> Envuelve todos los componentes que quiero que tengan su propia ruta (vista)
//Route -> Vincula la ruta con el componente

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/ItemDetailContainer/:id' element={<ItemDetailContainer/>}/>
          <Route path='/filter/:category' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<CartContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
