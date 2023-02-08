import './App.css';
import { useState } from 'react'


function App() {

  const [rezultati, setRezultati] = useState([])

  const [rezultat, setRezultat] = useState({
    domacin: '',
    gost: '',
    rez1: '',
    rez2: ''
  });

  function controlDomacin(e) {
    setRezultat({ ...rezultat, domacin: e.target.value })
  }

  function controlGost(e) {
    setRezultat({ ...rezultat, gost: e.target.value })
  }

  function controlRez1(e) {
    setRezultat({ ...rezultat, rez1: e.target.value })
  }

  function controlRez2(e) {
    setRezultat({ ...rezultat, rez2: e.target.value })
  }



  return (
    <div className="pocetna">

      <h1 id='heading-1'>Serie A 2022/23 results</h1>

      <div id='novi-rezultat'>
        <input type='text' className='form-control' id='domacin' placeholder='Domacin...' value={rezultat.domacin} onChange={controlDomacin} />

        <input type='number' id='rez-1' value={rezultat.rez1} onChange={controlRez1} />
        <span id='tackice'>:</span>
        <input type='number' id='rez-2' value={rezultat.rez2} onChange={controlRez2} />

        <input type='text' className='form-control' id='gost' placeholder='Gost...' value={rezultat.gost} onChange={controlGost} />

      </div>

      <button className='btn btn-dark' id='button-save'>Dodaj rezultat</button>




      <div id='rezultati'>

      </div>



    </div>
  );
}

export default App;
