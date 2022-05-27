import PropTypes from 'prop-types'
import style from './button.module.css'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} type='button' className={style.button}>
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

export default Button;