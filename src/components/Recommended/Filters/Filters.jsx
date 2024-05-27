import { useDispatch } from 'react-redux';
import { Form } from './Filters.styled';
import { recommendThunk } from '../../../redux/books/booksOperations';
import { useState } from 'react';
import { TitleForm } from '../../TitleForm/TitleForm';
import { BtnSbmt } from '../../Btn/BtnSbmt';

export const Filters = ({ per_page }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleAuthorChange = (evt) => {
    setAuthor(evt.target.value);
  };

  const params = {
    title: title,
    author: author,
    page: 1,
    per_page: per_page,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title || author) {
      dispatch(recommendThunk(params));
    }
  };

  return (
    <div>
      <TitleForm text={'Filters:'} />
      <Form onSubmit={handleSubmit}>
        <div className="inptWrapper">
          <p className="desc">Book title:</p>
          <input
            className="inptForm"
            type="text"
            placeholder="Enter text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="inptWrapper">
          <p className="desc">The author:</p>
          <input
            className="inptForm inptFormSecond"
            type="text"
            placeholder="Enter text"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <BtnSbmt text={'To apply'} />
      </Form>
    </div>
  );
};
