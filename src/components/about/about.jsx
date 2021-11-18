import './about.scss'
import Label from '../label/label'
import img from '../../common/icons/grainstrio.svg'
import { Container } from 'react-bootstrap'

const About = ({aboutTitle,aboutDescr}) => {
    return (
        <div className="about">
            <Container>
                <h2 className="about__title">{aboutTitle}</h2>
                <Label clsName="img__label img__label_black" SRC={img}/>
                <div className="about__descr">
                {aboutDescr}
                </div>
            </Container>
        </div>
    )
}

export default About