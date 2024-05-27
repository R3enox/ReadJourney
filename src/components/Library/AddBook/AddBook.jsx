import { useDispatch, useSelector } from 'react-redux';
import { Form } from './AddBook.styled';
import { useState } from 'react';
import { TitleForm } from '../../TitleForm/TitleForm';
import { BtnSbmt } from '../../Btn/BtnSbmt';
import { addBook, getLibrary } from '../../../redux/library/libraryOperations';
import { Modal } from '../../Modal/Modal';
import { ModalBodyAdd } from '../../ModalBodyAdd/ModalBodyAdd';

export const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useDispatch();
  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleAuthorChange = (evt) => {
    setAuthor(evt.target.value);
  };

  const handlePagesChange = (evt) => {
    setPages(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, author, totalPages: pages };
    if (title || author || pages) {
      dispatch(addBook(formData));
      setIsShowModal(true);
    }
  };

  return (
    <>
      <div>
        <TitleForm text={'Filters:'} />
        <Form onSubmit={handleSubmit}>
          <div className="inptWrapper">
            <p className="desc">Book title:</p>
            <input
              className="inptForm"
              type="text"
              placeholder="I See You Are Interested In The Dark"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="inptWrapper">
            <p className="desc">The author:</p>
            <input
              className="inptForm inptFormSecond"
              type="text"
              placeholder="Hilarion Pavlyuk"
              value={author}
              onChange={handleAuthorChange}
              required
            />
          </div>
          <div className="inptWrapper">
            <p className="desc">Number of pages:</p>
            <input
              className="inptForm inptFormThird"
              type="text"
              placeholder="664"
              value={pages}
              onChange={handlePagesChange}
              required
            />
          </div>
          <BtnSbmt text={'Add book'} />
        </Form>
      </div>
      {isShowModal && (
        <Modal
          maxwidth={'342px'}
          body={<ModalBodyAdd />}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};
