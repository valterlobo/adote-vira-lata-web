import './App.scss';
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Lista from './pages/lista';
import Home from './pages/home';
import Item from './pages/item';
import Contato from './pages/contato';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Works from './pages/works';
import ScrollToTop from './components/ScrollToTop';
import Portifoliodetails from './pages/portifoliodetails';
import AdoteDetalhe from './pages/adotedetalhes';
import Adote from './pages/adote';


export default function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="lista" element={<Lista/>} >
            <Route path=":invoiceId" element={<Item />} />
        </Route>
        <Route path="/contato" element={<Contato />} />
        <Route path="/works" element={<Works />} />
        <Route  exact path = {'/works/:id'} element = {<Portifoliodetails/>}/>
        <Route path="/adote" element={<Adote />} />
        <Route  exact path = {'/adote/:id'} element = {<AdoteDetalhe/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}





