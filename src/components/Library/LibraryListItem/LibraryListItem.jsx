import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../ModalBody/ModalBody';
import { LibraryListItemWrapper } from './LibraryListItem.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { removeLibraryBook } from '../../../redux/library/libraryOperations';
import { BtnLink } from '../../Btn/BtnLink';

export const LibraryListItem = ({ book }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { imageUrl, title, author, _id } = book;
  const dispatch = useDispatch();
  return (
    <>
      <LibraryListItemWrapper>
        <img
          srcSet={imageUrl}
          alt={title}
          className="imgBook"
          onClick={() => setIsShowModal(true)}
        />
        <div className="textWrapper">
          <h2 className="titleBook">{title}</h2>
          <p className="author">{author}</p>
          <button
            type="button"
            className="btnWrapper"
            onClick={() => dispatch(removeLibraryBook(_id))}
          >
            <svg className="iconTrash">
              <use href={sprite + '#icon-trash'}></use>
            </svg>
          </button>
        </div>
      </LibraryListItemWrapper>
      {isShowModal && (
        <Modal
          body={<ModalBody book={book} btn={<BtnLink id={_id} />} />}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};
