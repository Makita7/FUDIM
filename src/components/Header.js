import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Nav = () => {
    const NavElement = (props) => {
        return(
            <Link to={props.to}>
                <li className='navElement'>
                    {props.name}
                </li>
            </Link>
        );
    }

    return(
        <ul className='flexH right padR'>
            <NavElement to="/" name="Inicio" />
            <NavElement to="/nosotros" name="Nosotros" />
            <NavElement to="/nuestrasactividades" name="Nuestras Actividades" />
            <NavElement to="/contactos" name="Contactos" />
        </ul>
    );
}


function Header() {
    return (
          <header className='flexH'>
                <div className="col-3 padL">
                    <Link className='logo'  to='/'>
                        <img className='logo' alt='logo' src={Logo}/>
                    </Link>
                </div>

                <div className='col-9  padTop'>
                    <Nav/>
                </div>

          </header>
      );
  }
  
  export default Header;
  