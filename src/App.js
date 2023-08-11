import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ProductCard from './Component/ProductCard';
import LoginComponent from './Component/LoginComponent';
import Registration from './Component/Registration';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginComponent /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/' element={ <ProductCard /> } />
        </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
