import styled from 'styled-components';

export const RecommendedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
  }
`;
