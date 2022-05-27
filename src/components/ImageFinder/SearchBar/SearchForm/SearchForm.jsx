import { Component } from "react";
import PropTypes from 'prop-types'
import style from './searchForm.module.css'

class SearchForm extends Component {

    state = {
        q: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { q } = this.state
        this.props.onSubmit(q);
        this.reset();
    }

    reset() {
        this.setState({
            q: '',
        })
    }


    render() {
        const { handleChange, handleSubmit} = this
        const { q } = this.state
        return (
                <form className={style.form} onSubmit={handleSubmit}>
                    <button type="submit" className={style.button}>
                        <span className={style.search}></span>
                    </button>

                    <input
                        onChange={handleChange}
                        className={style.input}
                        type="text"
                        name="q"
                        value={q}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        required
                    />
                </form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SearchForm;