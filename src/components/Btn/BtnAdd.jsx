import { useDispatch } from 'react-redux';
import { addLibrary } from '../../redux/library/libraryOperations';
import { Btn } from './Btn.styled';

export const BtnAdd = ({ id, setIsShowModal }) => {
  const dispatch = useDispatch();
  return (
    <Btn
      className="btnAdd"
      type="submit"
      onClick={() => {
        dispatch(addLibrary(id));
        setIsShowModal(false);
      }}
    >
      Add to library
    </Btn>
  );
};
