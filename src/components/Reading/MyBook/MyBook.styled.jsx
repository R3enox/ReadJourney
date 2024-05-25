import styled from 'styled-components';

export const MyBookWrapper = styled.section`
  background-color: #1f1f1f;
  border-radius: 30px;
  padding: 40px 20px;

  .textTimerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .timer {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #686868;
  }
  .imgWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .imgBook {
    margin-top: 40px;
    border-radius: 8px;
    width: 137px;
    height: 208px;
  }

  .titleBook {
    margin-top: 10px;
    max-width: 146px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .author {
    margin-top: 5px;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #686868;
  }

  .btnIcon {
    border: none;
    background-color: transparent;
  }

  .iconCircle,
  .iconRectangle {
    margin-top: 16px;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    padding: 40px 40px;
    .imgBook {
      margin-top: 32px;
      width: 169px;
      height: 256px;
    }
    .titleBook {
      margin-top: 25px;
      max-width: 317px;
      font-size: 20px;
      line-height: 1;
      text-align: center;
    }

    .author {
      margin-top: 5px;
      font-size: 14px;
      line-height: 1, 29;
      letter-spacing: -0.02em;
      color: #686868;
    }
    .iconCircle,
    .iconRectangle {
      width: 50px;
      height: 50px;
    }

    .timer {
      font-size: 16px;
      line-height: 1.29;
    }
  }
  @media (min-width: 1280px) {
    margin-top: 16px;
    padding: 40px 40px 53px 40px;
    width: 847px;

    .imgBook {
      margin-top: 44px;
      width: 224px;
      height: 340px;
    }

    .iconCircle,
    .iconRectangle {
      margin-top: 25px;
    }
  }
`;
