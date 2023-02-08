import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './Pocetna';
import Tabela from './Tabela';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/tabela" element={<Tabela />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App;
