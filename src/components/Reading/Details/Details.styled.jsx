import styled from 'styled-components';

export const TextWrapper = styled.div`
  margin-top: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: #686868;
    margin-bottom: 20px;
  }

  .starImg {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    padding: 24px;
    border: none;
    border-radius: 100%;
    background-color: #262626;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    .title {
      font-size: 20px;
    }
    .desc {
      margin-bottom: 50px;
    }
    .starImg {
      width: 100px;
      height: 100px;
      padding: 25px;
      margin-bottom: 52px;
    }
  }
`;
