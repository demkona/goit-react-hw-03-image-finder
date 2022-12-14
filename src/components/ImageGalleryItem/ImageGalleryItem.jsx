import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'



export const ImageGalleryItem = ({ image, onClick }) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                src={image}
                alt=""
                className={css.ImageGalleryItemImage}
                onClick={onClick}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    bigImage: PropTypes.func,
};