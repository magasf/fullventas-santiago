import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Hola futuros clientes!"}/>
      
        
    </div>
  );
}

export default App;
