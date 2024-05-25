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

const ReadingPage = () => {
  const [page, setPage] = useState('');
  const [startStop, setStartStop] = useState(true);
  const [status, setStatus] = useState(true);
  const { _id: id, progress } = useSelector(selectBook);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      page: page,
    };
    if (startStop) {
      setStartStop(false);
      dispatch(readingStartThunk(formData));
    } else {
      setStartStop(true);

      dispatch(readingFinishThunk(formData));
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
