import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginComponent from './Component/LoginComponent';
import Registration from './Component/Registration';
import HomeScreen from './Screen/HomeScreen';
import CartScreen from './Screen/CartScreen';
import ProductDetailsScreen from './Screen/ProductDetailsScreen';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginComponent /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/' element={ <HomeScreen /> } />
          <Route path='/cart' element={ <CartScreen /> } />
          <Route path='/productdetails/:id' element={ <ProductDetailsScreen /> } />
        </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
