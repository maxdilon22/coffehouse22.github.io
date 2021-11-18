import './promo-cards.scss'
import imgOne from '../../common/img/coffetwo.png'
import imgTwo from '../../common/img/presto.png'
import imgThree from '../../common/img/coffeset.png'
import { Container } from 'react-bootstrap'
const PromoCards = () => {
    return (
        <div className="promo-cards">
            <Container>
                <h2 className="promo-cards__title">Our best</h2>
                <div className="promo-cards__wrapper">
                    <div className="promo-cards__card">
                        <img src={imgOne} alt="coffe" className="promo-cards__img" />
                        <div className="promo-cards__card-title">
                        Solimo Coffee Beans 2 kg
                        </div>
                        <div className="promo-cards__card-price">
                        10.73$
                        </div>
                    </div>
                    <div className="promo-cards__card">
                        <img src={imgTwo} alt="coffe" className="promo-cards__img" />
                        <div className="promo-cards__card-title">
                        Presto Coffee Beans 1 kg
                        </div>
                        <div className="promo-cards__card-price">
                        15.99$
                        </div>
                    </div>
                    <div className="promo-cards__card">
                        <img src={imgThree} alt="coffe" className="promo-cards__img" />
                        <div className="promo-cards__card-title">
                        AROMISTICO Coffee 1 kg
                        </div>
                        <div className="promo-cards__card-price">
                        6.99$
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PromoCards