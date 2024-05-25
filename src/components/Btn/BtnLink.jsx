import { useDispatch } from 'react-redux';
import { Lnk } from './Btn.styled';
import { getBookThunk } from '../../redux/books/booksOperations';

export const BtnLink = ({ id }) => {
  const dispatch = useDispatch();

  const handleGetBook = () => {
    dispatch(getBookThunk(id));
  };

  return (
    <Lnk className="btnAdd" to="/reading" onClick={handleGetBook()}>
      Start reading
    </Lnk>
  );
};
