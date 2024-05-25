import { useState } from 'react';
import { RecommendedListItemWrapper } from './RecommendedListItem.styled';
import { Modal } from '../Modal/Modal';
import { ModalBody } from '../ModalBody/ModalBody';
import { BtnAdd } from '../Btn/BtnAdd';

export const RecommendedListItem = ({ book }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { imageUrl, title, author } = book;
  return (
    <>
      <RecommendedListItemWrapper>
        <img
          srcSet={imageUrl}
          alt={title}
          className="imgBook"
          onClick={() => setIsShowModal(true)}
        />
        <h2 className="titleBook">{title}</h2>
        <p className="author">{author}</p>
      </RecommendedListItemWrapper>
      {isShowModal && (
        <Modal
          body={<ModalBody book={book} btn={<BtnAdd id={book._id} />} />}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};
