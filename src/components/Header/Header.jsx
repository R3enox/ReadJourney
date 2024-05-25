import { Logo } from '../Logo/Logo';
import { UserBar } from '../UserBar/UserBar';
import { UserBarTablet } from '../UserBar/UserBarTablet';
import { UserNav } from '../UserNav/UserNav';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <UserBarTablet />
      <UserBar />
      <UserNav />
    </HeaderContainer>
  );
};
