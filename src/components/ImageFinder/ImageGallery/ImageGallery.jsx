import PropTypes from 'prop-types'

import ImageGalleryItem from './ImageGalleryItem'

import style from './imageGallery.module.css'

const ImageGallery = ({items, onClick }) => {
    const elements = items.map(item => (
        <ImageGalleryItem key={item.id} url={item.webformatURL} modalUrl={item.largeImageURL} tags={item.tags} onClick={onClick}/>
    ));
    return (
        <ul className={style.list}> {elements} </ul>
    )
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }),
    ),
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery;