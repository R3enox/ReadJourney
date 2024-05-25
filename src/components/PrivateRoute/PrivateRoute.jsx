import { RECOMMENDED_ROUTE } from '../../constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../redux/user/userSelectors';

const PrivateRoute = ({ children, navigateTo = RECOMMENDED_ROUTE }) => {
  const authenticated = useSelector(selectIsAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
