import { Filter } from '../../../constants/filters';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Wrapper } from './LibraryFilter.styled';
import { useEffect, useState } from 'react';
import sprite from '../../../assets/sprite.svg';

export const LibraryFilter = ({ books, setFilteredBooks }) => {
  const [status, setStatus] = useState('');
  const [statusClick, setStatusClick] = useState(null);

  useEffect(() => {
    let filteredBooks = books;

    if (status === 'All books' || !status) {
      filteredBooks = books;
    } else {
      filteredBooks = filteredBooks.filter((book) => {
        const formattedValue = status.trim().replace(/\s+/g, '-');
        setStatus(formattedValue);
        return book.status.toLowerCase() === formattedValue.toLowerCase();
      });
    }
    setFilteredBooks(filteredBooks);
  }, [status, books, setFilteredBooks]);

  const handleStatusChange = ({ target: { value } }) => {
    setStatus(value);
    setStatusClick(false);
  };

  return (
    <Form className="formWrapper">
      <div className="labelWrapper wrapper">
        <select
          onFocus={() => setStatusClick(true)}
          onBlur={() => setStatusClick(false)}
          onChange={handleStatusChange}
          id="status"
          value={status}
        >
          <option value="All books" key="default" defaultValue>
            All books
          </option>
          {Filter.map((fil) => {
            const id = nanoid();
            return (
              <option value={fil} key={id}>
                {fil}
              </option>
            );
          })}
        </select>
        <Wrapper $statusClick={statusClick}>
          <button type="button" className="btnWrapper">
            <svg className="iconChevron statusChevron">
              <use href={sprite + '#icon-chevron-down'}></use>
            </svg>
          </button>
        </Wrapper>
      </div>
    </Form>
  );
};
