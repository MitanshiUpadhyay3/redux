import './App.css'
import Header from './components/Header'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import List from './components/List';
import Details from './components/Details';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<List/>}/>
        <Route path='/detail/:productId' element={<Details/>}/>
        <Route path='/cart/:productId' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
