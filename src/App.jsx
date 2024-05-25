import { lazy, useEffect } from 'react';
import { AppWrapper } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchCurrentThunk } from './redux/user/userOperations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoutes/RestrictedRoutes';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import * as ROUTES from './constants/routes.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const RecommendedPage = lazy(() =>
  import('./pages/RecommendedPage/RecommendedPage')
);
const LibraryPage = lazy(() => import('./pages/LibraryPage/LibraryPage'));
const ReadingPage = lazy(() => import('./pages/ReadingPage/ReadingPage'));

export const App = () => {
  const dispatch = useDispatch();
  const appRoutesPrivate = [
    {
      path: ROUTES.RECOMMENDED_ROUTE,
      element: (
        <PrivateRoute>
          <RecommendedPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.MYLIBRARY_ROUTE,
      element: (
        <PrivateRoute>
          <LibraryPage />
        </PrivateRoute>
      ),
    },
    {
      path: ROUTES.READING_ROUTE,
      element: (
        <PrivateRoute>
          <ReadingPage />
        </PrivateRoute>
      ),
    },
  ];

  const appRoutesRestricted = [
    {
      path: ROUTES.LOGIN_ROUTE,
      element: (
        <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
          <LoginPage />
        </RestrictedRoute>
      ),
    },
    {
      path: ROUTES.REGISTER_ROUTE,
      element: (
        <RestrictedRoute navigateTo={ROUTES.HOME_ROUTE}>
          <RegisterPage />
        </RestrictedRoute>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchCurrentThunk());
  }, [dispatch]);
  return (
    <AppWrapper>
      <Routes>
        {appRoutesRestricted.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route element={<SharedLayout />}>
          {appRoutesPrivate.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AppWrapper>
  );
};
export default App;
