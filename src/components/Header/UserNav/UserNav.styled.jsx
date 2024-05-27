import styled, { css } from 'styled-components';

export const BackDrop = styled.div`
  ${({ open }) =>
    open &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      background: rgba(20, 20, 20, 0.6);
      z-index: 99;
      overflow: hidden;

      .iconBurger {
        display: none;
      }
    `}

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const IconWrapper = styled.nav`
  display: flex;
  gap: 10px;

  .iconBtn {
    border: none;
    background-color: transparent;
  }

  .iconBurger {
    stroke: #f9f9f9;
    width: 28px;
    height: 28px;
  }

  .iconClose {
    position: absolute;
    top: 34px;
    right: 40px;
    width: 28px;
    height: 28px;
    stroke: #f9f9f9;
  }

  .listMenu {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .headerLink {
    color: #686868;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #f9f9f9;
    }
  }

  .active {
    padding-bottom: 4px;
    border-bottom: 2px solid #4f92f7;
    color: #f9f9f9;

    &:hover,
    &:focus {
      transition-duration: 300ms;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background-color: #262626;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  padding: 280px 70px 40px;
  overflow-y: none;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .btnLogout {
    border: 1px solid rgba(249, 249, 249, 0.2);
    background-color: transparent;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 91px;
    height: 38px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 0.02em;
    color: #f9f9f9;
    white-space: nowrap;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      border: none;
      color: #1f1f1f;
      background-color: #f9f9f9;
    }
  }
`;

export const MenuContent = styled.div`
  padding: 20px;
  color: white;
`;
