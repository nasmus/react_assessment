import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginComponent from './Component/LoginComponent';
import Registration from './Component/Registration';
import HomeScreen from './Screen/HomeScreen';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <LoginComponent /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/' element={ <HomeScreen /> } />
        </Routes>
        
      </BrowserRouter>
       
    </div>
  );
}

export default App;
