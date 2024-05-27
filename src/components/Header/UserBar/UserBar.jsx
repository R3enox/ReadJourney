import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user/userSelectors';
import { FullName, Name, NameWrapper, Wrapper } from './UserBar.styled';
import { useNavigate } from 'react-router-dom';
import { signOutThunk } from '../../../redux/user/userOperations';
import { toastSuccess } from '../../../helpers/toast';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch(signOutThunk());
    toastSuccess('Logout successful!');
    navigate('/login');
  };

  const { name } = user;

  return (
    <Wrapper>
      <NameWrapper>
        {name && <Name>{name[0]}</Name>}
        {name && <FullName>{name}</FullName>}
      </NameWrapper>
      <button className="btnLogout" type="button" onClick={onSignOut}>
        Log out
      </button>
    </Wrapper>
  );
};
