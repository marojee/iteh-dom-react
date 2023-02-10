import Nav from "./Nav";
import axios from "axios";
import { useState, useEffect } from 'react';
import Naslov from "./Naslov";


function Tabela() {

    const [tabela, setTabela] = useState([])

    useEffect(() => {
        axios.request(options).then(function (response) {
            setTabela(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    const options = {
        method: 'GET',
        url: 'https://football98.p.rapidapi.com/seriea/table',
        headers: {
            'X-RapidAPI-Key': '6b5a7ee7e7mshba47d4fd777dba3p12c933jsn7b1139b00a53',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
    };

    return (
        <div>

            <Nav />

            <Naslov />

            <div id="tabela-seriea">

                {tabela.map(tim => {
                    return (
                        <tr key={tim.Position}>
                            <td className="mx-1">{tim.Position}</td>
                            <td className="mx-5">{tim.Name}</td>
                            <td className="mx-5">{tim.Winned}</td>
                            <td className="mx-5">{tim.Tie}</td>
                            <td className="mx-5">{tim.Loosed}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="mx-5">{tim.Points}</td>
                        </tr>
                    );
                })}

            </div>

        </div >
    )
}

export default Tabela;