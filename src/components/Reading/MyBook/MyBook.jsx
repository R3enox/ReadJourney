import { useSelector } from 'react-redux';
import { Title } from '../../Title/Title';
import { MyBookWrapper } from './MyBook.styled';
import { selectBook } from '../../../redux/books/booksSelectors';

export const MyBook = ({ startStop, handleSubmit, isProgress }) => {
  const { imageUrl, title, author, timeLeftToRead } = useSelector(selectBook);

  return (
    <MyBookWrapper>
      <form onSubmit={handleSubmit}>
        <div className="textTimerWrapper">
          <Title title={'My reading'} />
          {!isProgress && (
            <p className="timer">{`${timeLeftToRead?.hours} hours and ${timeLeftToRead?.minutes} minutes left`}</p>
          )}
        </div>
        <div className="imgWrapper">
          <img src={imageUrl} alt={title} className="imgBook" />
          <h2 className="titleBook">{title}</h2>
          <p className="author">{author}</p>
          {startStop ? (
            <button type="submit" className="btnIcon">
              <svg
                className="iconCircle"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="15" fill="#E90516" />
                <circle cx="20" cy="20" r="19" stroke="#F9F9F9" />
              </svg>
            </button>
          ) : (
            <button type="submit" className="btnIcon">
              <svg
                className="iconRectangle"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="19" stroke="#F9F9F9" />
                <rect
                  x="12"
                  y="13"
                  width="15"
                  height="15"
                  rx="3"
                  fill="#E90516"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </MyBookWrapper>
  );
};
