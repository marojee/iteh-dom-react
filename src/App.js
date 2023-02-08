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


  function dodajRezultat() {
    setRezultati(rezultati => [...rezultati, rezultat]);
  }


  return (
    <div className="pocetna">

      <h1 id='heading-1'>Serie A 2022/23 results</h1>

      <div id='novi-rezultat'>
        <input type='text' className='form-control' id='domacin' placeholder='Domacin' value={rezultat.domacin} onChange={controlDomacin} />

        <input type='number' id='rez-1' value={rezultat.rez1} onChange={controlRez1} />
        <span id='tackice'>:</span>
        <input type='number' id='rez-2' value={rezultat.rez2} onChange={controlRez2} />

        <input type='text' className='form-control' id='gost' placeholder='Gost' value={rezultat.gost} onChange={controlGost} />

      </div>

      <button onClick={dodajRezultat} className='btn btn-dark' id='button-save'>Dodaj rezultat</button>




      <div id='rezultati'>
        {
          rezultati.map((rez) => (

            <div className="rezultat" key={rez.id}>

              <h4 id='domacin-h4'>{rez.domacin}</h4>
              <h4 id='rez1-h4'>{rez.rez1}</h4>
              <span id='tackice'>:</span>
              <h4 id='rez2-h4'>{rez.rez2}</h4>
              <h4 id='gost-h4'>{rez.gost}</h4>


            </div>
          ))
        }
      </div>



    </div >
  );
}

export default App;
