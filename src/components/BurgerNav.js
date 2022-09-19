import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function BurgerNav() {

    const NavElement = (props) => {
        return(
            <Link to={props.to}>
                <li className='navElement'>
                    {props.name}
                </li>
            </Link>
        );
    }
    return (
    <div className='cellAppear'>
        <NavDropdown title="Menu" id="nav-dropdown" className=" menu">

        <NavDropdown.Item eventKey="4.1">
            <NavElement to="/" name="Inicio" />
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.2">
            <NavElement to="/nosotros" name="Quiénes Somos" />
        </NavDropdown.Item>

        <NavDropdown.Item eventKey="4.3">
            <NavElement to="/nuestrasactividades" name="Nuestras Actividades"/>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">
            <NavElement to="contactos" name="Contactos" />
        </NavDropdown.Item>

        </NavDropdown>
    </div>
    );
}

export default BurgerNav;