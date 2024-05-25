import { Link } from 'react-router-dom';
import { Wrapper } from './Books.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../../redux/books/booksSelectors';
import { recommendThunk } from '../../../redux/books/booksOperations';
import { useEffect, useState } from 'react';

export const Books = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectBooks);
  const {
    books: { results },
  } = data;

  const params = {
    title: '',
    author: '',
    page: 1,
    per_page: 3,
  };

  useEffect(() => {
    dispatch(recommendThunk(params));
  }, [dispatch]);

  return (
    <Wrapper>
      <h2 className="title">Recommended books</h2>
      <ul className="listItem">
        {results.map(({ imageUrl, title, author, _id }) => {
          return (
            <li className="item" key={_id}>
              <img srcSet={imageUrl} alt={title} className="imgBook" />
              <h2 className="titleBook">{title}</h2>
              <p className="author">{author}</p>
            </li>
          );
        })}
      </ul>
      <div className="linkWrapper">
        <Link className="libraryLink " to="/recommended">
          Home
        </Link>
        <Link to="/recommended">
          <button className="arrowBtn">
            <svg className="arrowIcon">
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
