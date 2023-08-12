import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginComponent from './Component/LoginComponent';
import Registration from './Component/Registration';
import HomeScreen from './Screen/HomeScreen';
import CartScreen from './Screen/CartScreen';
import ProductDetailsScreen from './Screen/ProductDetailsScreen';
import DashBoardScreen from './Admin/DashboardScreen';
import UploadProduct from './Admin/UploadProduct';
import ListProduct from './Admin/ListProduct';
import CustomerList from './Admin/CustomerList';
import AddCustomer from './Admin/AddCustomer';
import OrderList from './Admin/OrderList';
import OrderDetails from './Admin/OrderDetails';

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
          <Route path='/admin' element={ <DashBoardScreen /> } />
          <Route path='/admin/upload' element={ <UploadProduct /> } />
          <Route path='/admin/productlist' element={ <ListProduct /> } />
          <Route path='/admin/customer' element={ <CustomerList /> } />
          <Route path='/admin/addcustomer' element={ <AddCustomer /> } />
          <Route path='/admin/orderlist' element={ <OrderList /> } />
          <Route path='/admin/orderdetails/:id' element={ <OrderDetails /> } />
        </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
