import './footer.scss'
import imgOne from '../../common/icons/grainstwobor.svg'
import imgTwo from '../../common/icons/grainstrio.svg'
import {Container} from 'react-bootstrap'
import Label from '../label/label'
const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <div className="footer__child">
                <img className="logo" src={imgOne} alt="footer__logo" />
                <ul className="footer__items">
                <li className="footer__item">Coffee house</li>
                <li className="footer__item">Our coffee</li>
                <li className="footer__item">For your pleasure</li>
            </ul>
            </div>
                <Label clsName="img__label img__label_black" SRC={imgTwo}/>
        </Container>
        </footer>
    )
}

export default Footer;