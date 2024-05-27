import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../ModalBody/ModalBody';
import { LibraryListItemWrapper } from './LibraryListItem.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { removeLibraryBook } from '../../../redux/library/libraryOperations';
import { BtnLink } from '../../Btn/BtnLink';
import { useState } from 'react';

export const LibraryListItem = ({ book }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <LibraryListItemWrapper>
        <img
          srcSet={book?.imageUrl}
          alt={book.title}
          className="imgBook"
          onClick={() => setIsShowModal(true)}
        />
        <div className="textWrapper">
          <h2 className="titleBook">{book.title}</h2>
          <p className="author">{book.author}</p>
          <button
            type="button"
            className="btnWrapper"
            onClick={() => dispatch(removeLibraryBook(book._id))}
          >
            <svg className="iconTrash">
              <use href={sprite + '#icon-trash'}></use>
            </svg>
          </button>
        </div>
      </LibraryListItemWrapper>

      {isShowModal && (
        <Modal
          body={<ModalBody book={book} btn={<BtnLink id={book._id} />} />}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};
