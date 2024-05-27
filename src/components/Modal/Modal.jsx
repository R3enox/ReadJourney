import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { Backdrop } from './Modal.styled';

export const Modal = ({ maxwidth, body, setIsShowModal }) => {
  const portal = document.getElementById('portal');

  useEffect(() => {
    window.addEventListener('keydown', memoizedhandleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', memoizedhandleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const memoizedhandleKeyDown = useCallback(
    (evt) => {
      if (evt.code === 'Escape') {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  const memoizedhandleOverlayClick = useCallback(
    (evt) => {
      if (evt.target === evt.currentTarget) {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  return createPortal(
    <Backdrop maxwidth={maxwidth} onClick={memoizedhandleOverlayClick}>
      <div className="modal">
        <button
          className="btnCross"
          type="button"
          onClick={() => setIsShowModal(false)}
        >
          <svg className="iconClose">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
        {body}
      </div>
    </Backdrop>,
    portal
  );
};
