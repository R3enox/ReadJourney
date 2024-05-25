import styled from 'styled-components';

export const QuoteBlockWrapper = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 15px 20px;
    background-color: #262626;
    border-radius: 12px;

    .desc {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: #686868;
    }
    .fillWord {
      color: #f9f9f9;
    }
  }
`;
