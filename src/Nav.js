import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className="nav">

            <div className="nav-member" id='n-home'>
                <Link to="/">Pocetna</Link>
            </div>

            <div className="nav-member">
                <Link to="/tabela" id='n-table'>Tabela</Link>
            </div>

        </div>
    );
}

export default Nav;