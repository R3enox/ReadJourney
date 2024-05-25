import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { BackDrop, IconWrapper, Menu } from './UserNav.styled';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutThunk } from '../../redux/user/userOperations';

export const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch(signOutThunk());

    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BackDrop open={isOpen}>
      <IconWrapper>
        <button className="iconBtn" onClick={toggleMenu}>
          <svg className="iconBurger">
            <use href={sprite + '#icon-burger'} />
          </svg>
        </button>
        <div>
          <Menu open={isOpen}>
            <button className="iconBtn" onClick={toggleMenu}>
              <svg className="iconClose">
                <use href={sprite + '#icon-close'} />
              </svg>
            </button>
            <div className="wrapper">
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
              <button className="btnLogout" type="button" onClick={onSignOut}>
                Log out
              </button>
            </div>
          </Menu>
        </div>
      </IconWrapper>
    </BackDrop>
  );
};
