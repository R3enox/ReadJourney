import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 70px 40px;

  .imgBook {
    width: 140px;
    height: 213px;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 2px;
    max-width: 250px;
  }

  .author {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #686868;
    text-align: center;
    margin-bottom: 4px;
  }

  .totalPages {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 50px 169px 50px;

    .imgBook {
      width: 153px;
      height: 233px;
    }
    .titleBook {
      font-size: 20px;
    }
    .author {
      font-size: 14px;
      line-height: 1.29;
    }
    .totalPages {
      margin-bottom: 32px;
    }
  }
`;
