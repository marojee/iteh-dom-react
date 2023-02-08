import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="pocetna">

      <h1 id='heading-1'>Serie A 2022/23 results</h1>

      <div id='novi-rezultat'>
        <input type='text' className='form-control' id='domacin' placeholder='Domacin...' />

        <input type='text' id='rez-1' />
        <span id='tackice'>:</span>
        <input type='text' id='rez-2' />

        <input type='text' className='form-control' id='gost' placeholder='Gost...' />

      </div>

      <button className='btn btn-dark' id='button-save'>Dodaj rezultat</button>

    </div>
  );
}

export default App;
