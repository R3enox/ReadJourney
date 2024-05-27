import styled from 'styled-components';

export const TabletWrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 123px;

    .listMenu {
      display: flex;
      gap: 32px;
      font-size: 16px;
      line-height: 1.12;
      letter-spacing: -0.02em;
      white-space: nowrap;
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
  }

  @media (min-width: 1280px) {
    margin-left: 0;
    .listMenu {
      display: flex;
      gap: 40px;
    }
  }
`;
