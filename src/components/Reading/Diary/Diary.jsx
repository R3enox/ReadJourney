import { useDispatch, useSelector } from 'react-redux';
import { selectBook } from '../../../redux/books/booksSelectors';
import sprite from '../../../assets/sprite.svg';
import { Wrapper } from './Diary.styled';
import { readingDeleteThunk } from '../../../redux/books/booksOperations';

export const Diary = () => {
  const { totalPages, progress, _id: bookId } = useSelector(selectBook);

  const dispatch = useDispatch();

  const formatDate = (startReading, finishReading) => {
    const startDate = new Date(startReading);
    const finishDate = new Date(finishReading);
    const differenceMs = finishDate - startDate;
    const differenceMinutes = Math.floor(differenceMs / 60000);
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const formattedDate = `${day < 10 ? '0' + day : day}.${
      month < 10 ? '0' + month : month
    }.${year} `;
    return { formattedDate, differenceMinutes };
  };

  return (
    <>
      <Wrapper>
        <ul className="statisticsList">
          {progress
            .slice()
            .reverse()
            .map(
              ({
                _id,
                startReading,
                finishReading,
                startPage,
                finishPage,
                speed,
              }) => {
                const searchParams = new URLSearchParams({
                  bookId,
                  readingId: _id,
                });

                const { formattedDate, differenceMinutes } = formatDate(
                  startReading,
                  finishReading
                );
                const totalRead = finishPage - startPage + 1;
                const totalReadInPercentage = (
                  (totalRead * 100) /
                  totalPages
                ).toFixed(1);

                return (
                  <li className="listItem" key={_id}>
                    <div className="datePageWrapper">
                      <svg
                        className="iconBW"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="16" rx="4" fill="#F9F9F9" />
                        <rect
                          x="4"
                          y="4"
                          width="8"
                          height="8"
                          rx="2"
                          fill="#141414"
                        />
                      </svg>
                      <p className="date">{formattedDate}</p>
                      <p className="pageRead">{totalRead} pages</p>
                    </div>
                    <div className="percentageWrapper ">
                      <p className="totalReadInPercentage">
                        {totalReadInPercentage}%
                      </p>
                      <div className="svgWrapper">
                        <svg className="iconGraf">
                          <use href={sprite + '#icon-graf'} />
                        </svg>
                        <button
                          type="button"
                          className="btnWrapper"
                          onClick={() =>
                            dispatch(readingDeleteThunk(searchParams))
                          }
                        >
                          <svg className="iconTrash">
                            <use href={sprite + '#icon-trash'}></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="minutesWrapper">
                      <p className="differenceMinutes">
                        {differenceMinutes} minutes
                      </p>
                      <p className="speed">{speed} pages per hour</p>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </Wrapper>
    </>
  );
};
