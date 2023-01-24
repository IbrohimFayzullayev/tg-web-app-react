import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram";
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route index path="/" element={<ProductList/>}/>
        <Route index path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
