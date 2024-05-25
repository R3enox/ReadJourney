import styled from 'styled-components';

export const MyLibraryWrapper = styled.section`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 40px 20px;

  .flexWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .imgWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 49px;
  }

  .libImg {
    padding: 25px;
    border-radius: 100%;
    background-color: #262626;
    margin-bottom: 10px;
  }

  .desc {
    max-width: 197px;

    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .textFill {
    color: #686868;
  }

  @media (min-width: 768px) {
    .flexWrapper {
      margin-bottom: 86px;
    }
    .libImg {
      margin-bottom: 20px;
    }

    .desc {
      max-width: 274px;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 16px;
    width: 847px;

    .flexWrapper {
      margin-bottom: 147px;
    }
  }
`;
