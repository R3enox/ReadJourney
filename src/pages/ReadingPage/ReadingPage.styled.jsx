import styled from 'styled-components';

export const ReadingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    .detWrapper {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
`;
