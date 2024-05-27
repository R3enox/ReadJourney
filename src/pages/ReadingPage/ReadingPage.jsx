import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { AddReading } from '../../components/Reading/AddReading/AddReading';
import { Details } from '../../components/Reading/Details/Details';
import { MyBook } from '../../components/Reading/MyBook/MyBook';
import { ReadingPageWrapper } from './ReadingPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  readingFinishThunk,
  readingStartThunk,
} from '../../redux/books/booksOperations';
import { selectBook } from '../../redux/books/booksSelectors';
import { TitleReading } from '../../components/Reading/TitleReading/TitleReading';
import { toastSuccess, toastWarn } from '../../helpers/toast';

const ReadingPage = () => {
  const [page, setPage] = useState('');
  const [startStop, setStartStop] = useState(true);
  const [status, setStatus] = useState(true);
  const { _id: id, progress, totalPages } = useSelector(selectBook);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      page: page,
    };

    if (startStop && page < totalPages && page > 0) {
      setStartStop(false);
      setPage('');
      toastSuccess('You have started reading the book!');
      return dispatch(readingStartThunk(formData));
    } else if (page <= totalPages && page > 0) {
      setStartStop(true);
      setPage('');
      toastSuccess(
        `You have finished reading the book in ${formData.page} page!`
      );
      return dispatch(readingFinishThunk(formData));
    } else if (page <= 0) {
      toastWarn(
        `You cannot read fewer pages than the ${formData.page} pages of the book.`
      );
    } else {
      toastWarn(
        `You cannot read more pages than the ${totalPages} pages of the book.`
      );
    }
  };

  const handleChangeStatus = () => {
    setStatus(!status);
  };

  const isProgress = progress.length === 0;

  return (
    <ReadingPageWrapper>
      <Dashboard>
        <AddReading
          startStop={startStop}
          page={page}
          setPage={setPage}
          handleSubmit={handleSubmit}
        />
        <div className="detWrapper">
          {!isProgress && (
            <TitleReading
              status={status}
              handleChangeStatus={handleChangeStatus}
            />
          )}

          <Details status={status} isProgress={isProgress} />
        </div>
      </Dashboard>
      <MyBook
        startStop={startStop}
        handleSubmit={handleSubmit}
        isProgress={isProgress}
      />
    </ReadingPageWrapper>
  );
};

export default ReadingPage;
