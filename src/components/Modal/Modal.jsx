import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import { Overlay, Wrapper, Image, CloseButton } from './Modal.styled';

const ModalRoot = document.querySelector('#root');

export const Modal = ({ url, onClose }) => {
  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeydown = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeydown);

    return () => {
      window.removeEventListener('keydown', handleEscKeydown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Wrapper>
        <CloseButton type="button" onClick={onClose}>
          <IconContext.Provider value={{ size: '2em' }}>
            <MdClose />
          </IconContext.Provider>
        </CloseButton>
        <Image src={url} alt="" />
      </Wrapper>
    </Overlay>,
    ModalRoot
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
