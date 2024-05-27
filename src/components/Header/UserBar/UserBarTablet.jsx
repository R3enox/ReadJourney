import { NavLink } from 'react-router-dom';
import { TabletWrapper } from './UserBarTablet.styled';
import { useSelector } from 'react-redux';
import { selectBook } from '../../../redux/books/booksSelectors';
export const UserBarTablet = () => {
  const book = useSelector(selectBook);
  return (
    <TabletWrapper>
      <ul className="listMenu">
        <li>
          <NavLink
            className={({ isActive }) => {
              return !isActive ? 'headerLink' : 'active';
            }}
            to="/recommended"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return !isActive ? 'headerLink' : 'active';
            }}
            to="/library"
          >
            My library
          </NavLink>
        </li>
        {book && (
          <li>
            <NavLink
              className={({ isActive }) => {
                return !isActive ? 'headerLink' : 'active';
              }}
              to="/reading"
            >
              My training
            </NavLink>
          </li>
        )}
      </ul>
    </TabletWrapper>
  );
};
