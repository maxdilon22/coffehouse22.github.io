import { Container } from "react-bootstrap";
import './promo.scss';
import img from '../../common/icons/grainstriowh.svg'
import Menu from '../menu/menu'
import Label from "../label/label";

const Promo = () => {
    return (
        <div className="promo">
            <Container>
            <Menu/>
            <h1>Everything You Love About Coffee</h1>
            <div className="promo__label">
                <Label clsName="img__label img__label_white" SRC={img}/>
            </div>
            <h2 className="promo__subtitle">We makes every day full of energy and taste</h2>
            <h2 className="promo__subtitle promo__subtitle_sm">Want to try our beans?</h2>
            <a href="google.com" className="promo__link">More</a>
            </Container>
        </div>
    )   
}

export default Promo;