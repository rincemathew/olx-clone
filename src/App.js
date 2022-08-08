import logo from './olx-logo.png';
import './App.css';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
