import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import  Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

// pages
import Sanduiches from './pages/sanduiches/Sanduiches';
import Lojas from './pages/lojas/Lojas';
import Home from './pages/home/Home';
import Combos from './pages/combos/Combos';
import Bebidas from './pages/bebidas/Bebidas';
import Adicionais from './pages/adicionais/Adicionais';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='.container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sanduiches' element={<Sanduiches />} />
            <Route path='/lojas' element={ <Lojas />}/>
            <Route path='/combos' element={ <Combos />}/>
            <Route path='/bebidas' element={ <Bebidas />}/>
            <Route path='/adicionais' element={ <Adicionais />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
