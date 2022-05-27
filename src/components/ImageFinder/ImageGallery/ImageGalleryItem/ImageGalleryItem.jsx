import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, url, modalUrl, onClick }) => {
    return (
        <li className={style.imageGalleryItem}>
            <img
                className={style.imageGalleryPhoto}
                src={url}
                alt={tags}
                onClick={() => onClick({tags, modalUrl})}
            />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string,
    url: PropTypes.string.isRequired,
    modalUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;