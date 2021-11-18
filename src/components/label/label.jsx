import './label.scss'

const Label = ({clsName,SRC}) => {
    return (
        <div class="logo__wrapper">
        <div className={clsName}>
        <img src={SRC} alt="label" />
        </div>
        </div>
    )
}

export default Label;