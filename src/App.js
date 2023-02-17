import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './componets/home';
import FavoritesOpen from './componets/favoritesopen';
import Catimgopen from './componets/categoryopen';
import Categorydetails from './componets/categorydetails'
import { Routes,Route } from 'react-router-dom';
// import FillExample from './componets/test'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    {/* <FillExample/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/favorite" element={<FavoritesOpen/>}/>
        <Route exact path="jewelry/:category" element={<Catimgopen/>}/>
        <Route exact path="jewelry/:category/:id" element={<Categorydetails/>}/>
        <Route exact path="/product" element={<FavoritesOpen/>}/>
      </Routes>
</>

  );
}

export default App;
