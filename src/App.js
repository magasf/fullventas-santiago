import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import ComponentUseEffectProduct from './components/ItemCount'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola futuros clientes!"}/>
      <ComponentUseEffectProduct />
      
        
    </div>
  );
}

export default App;
