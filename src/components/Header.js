import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import BurgerNav from './BurgerNav';
import Nav from './Nav';


function Header() {
    return (
        <header className='flexH sticky'>
                <div className="col-3 padL">
                    <Link className='logo'  to='/'>
                        <img className='logo' alt='logo' src={Logo}/>
                    </Link>
                </div>

                <div className='col-9  padTop'>
                    <Nav/>
                    <BurgerNav/>
                </div>
        </header>
    );
}
export default Header;
