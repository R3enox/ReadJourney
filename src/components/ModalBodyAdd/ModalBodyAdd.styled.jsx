import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 46px 60px;

  .imgBook {
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: 242px;
    color: #686868;
  }

  .fillWord {
    color: #f9f9f9;
  }

  @media (min-width: 768px) {
    padding: 50px;

    .imgBook {
      width: 68px;
      height: 70px;
      margin-bottom: 32px;
    }
    .titleBook {
      font-size: 20px;
      margin-bottom: 14px;
    }
  }
`;
