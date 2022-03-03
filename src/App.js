import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ComponentUseEffectProduct from './components/ItemCount'
import Item from './components/Item';
import { customFetch } from './components/utils/customFetch';
import { useEffect } from 'react';

import MenuIZ from './components/Header/trianguloIZ';

const { data } = require('./components/utils/data.js');

const App = () => {
  
  useEffect(() => {
    customFetch(2000, data)
      .then((data) => console.log('Se cargan las img', data))
      .catch((error) => console.log('No se pueden cargar las img', error))

  }, [])


  return (
    <div className="App">
      <MenuIZ/>
      <NavBar />
      <ItemListContainer greeting={"Hola futuros clientes!"} />
      <hr />
      <ComponentUseEffectProduct />
      <hr />
      <Item />


    </div>
  );
}

export default App;
