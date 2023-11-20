import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img, onClick }) => {
  const { webformatURL, largeImageURL, tags } = img;

  const handleClick = () => onClick(largeImageURL);

  return (
    <Item>
      <Image
        onClick={handleClick}
        src={webformatURL}
        alt={tags}
        loading="lazy"
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
