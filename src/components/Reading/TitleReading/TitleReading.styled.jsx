import styled from 'styled-components';

export const SvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;

  .titleSvgWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .desctopDesc {
    display: none;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .svgWrapper {
    display: flex;
    gap: 8px;
  }
  .btnIcon {
    border: none;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 16px;
    .title {
      font-size: 20px;
    }
  }

  @media (min-width: 1280px) {
    .title {
      font-size: 28px;
      line-height: 1.14;
    }
    .desctopDesc {
      max-width: 293px;
      display: flex;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: #686868;
    }
  }
`;

export const SvgSecondWrapper = styled.div`
  .btnIcon {
    border: none;
    background-color: transparent;
  }
`;
