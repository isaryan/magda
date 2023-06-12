import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Trabalho from '../Trabalho/Trabalho';
import Contato from '../Contato/Contato';
import Declaracao from '../Declaracao/Declaracao'; import Nav from '../Nav/Nav';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/declaracao" element={<Declaracao />} />
        <Route path="/portfolio" element={<Trabalho />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

export default App;
