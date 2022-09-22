import Header from './Header';
import './App.css';
import {  BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>

          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/Checkout" element={<Checkout/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
