import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

  function App() {
    return (
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/product' element= {<Product/>}/>
        <Route path='/cart' element= {<Cart/>}/>
      </Routes>
    );
  }

  export default App;