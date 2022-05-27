import PropTypes from 'prop-types';

import style from './searchBar.module.css';

const SearchBar = ({children}) => {
    return <header className={style.searchBar}> {children} </header>
}

SearchBar.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SearchBar;