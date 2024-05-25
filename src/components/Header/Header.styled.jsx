import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 11px 20px;
  background-color: #1f1f1f;
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 16px;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;
