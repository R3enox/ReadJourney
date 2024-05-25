import { NavLink } from 'react-router-dom';
import { TabletWrapper } from './UserBarTablet.styled';
export const UserBarTablet = () => {
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
      </ul>
    </TabletWrapper>
  );
};
