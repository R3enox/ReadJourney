import { Link } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { LogoWrapper } from './Logo.styled.jsx';

export const Logo = () => {
  return (
    <LogoWrapper className="logoWrapper">
      <button className="btnLogo">
        <svg className="iconLogo">
          <use href={sprite + '#icon-logo'} />
        </svg>
      </button>
      <Link className="textLogo" to="/recommended">
        read journey
      </Link>
    </LogoWrapper>
  );
};
