import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import ComponentUseEffectProduct from './components/ItemCount'
import Item from './components/Item';

const App = () => {

  

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola futuros clientes!"}/>
      <ComponentUseEffectProduct />
      <Item/>
      
        
    </div>
  );
}

export default App;
