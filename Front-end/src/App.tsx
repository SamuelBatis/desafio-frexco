import './styles/global.scss'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export function App() {

  return (
   <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="Products" element={<Products/>} />
  </Routes> 
    );
}