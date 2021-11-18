import './menu.scss'
import img from '../../common/icons/grainstwo.svg'
import {Container} from 'react-bootstrap'
const Menu = () => {
    return (
        <menu className="menu">
        <Container>
            <div className="menu__wrapper">
            <img className="menu__logo" src={img} alt="logo" />
            <ul className="menu__items">
                <li className="menu__item">Coffee house</li>
                <li className="menu__item">Our coffee</li>
                <li className="menu__item">For your pleasure</li>
            </ul>
            </div>
        </Container>
        </menu>
    )
}

export default Menu
