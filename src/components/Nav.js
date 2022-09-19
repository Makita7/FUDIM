import { Link } from 'react-router-dom';

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
        <ul className='flexH right padR cellDisappear'>
            <NavElement to="/" name="Inicio" />
            <NavElement to="/nosotros" name="Quiénes Somos" />
            <NavElement to="/nuestrasactividades" name="Nuestras Actividades" />
            <NavElement to="/contactos" name="Contactos" />
        </ul>
    );
}

export default Nav;