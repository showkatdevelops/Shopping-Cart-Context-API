import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home/>}
            exact
          ></Route>
          <Route
            path="/cart"
            element={<Cart/>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
