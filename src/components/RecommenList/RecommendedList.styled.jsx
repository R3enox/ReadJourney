import styled from 'styled-components';

export const RecommendedListWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (min-width: 768px) {
    gap: 20px;
  }
`;
