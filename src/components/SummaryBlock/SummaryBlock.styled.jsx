import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #262626;
  border-radius: 12px;
  padding: 20px;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .listItem {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f9f9f9;
    padding: 11px 16px;
    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
    text-align: center;
    color: #1f1f1f;
  }

  .text {
    width: 203px;
  }
  .item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .fill {
    color: #686868;
  }

  .linkWrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .libraryLink {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-decoration: underline;
    color: #686868;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #f9f9f9;
    }
  }

  .arrowBtn {
    background-color: transparent;
    border: none;
  }

  .arrowIcon {
    width: 24px;
    height: 24px;
    stroke: #f9f9f9;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 20px;
      margin-bottom: 40px;
    }

    .number {
      font-size: 20px;
      padding: 13px 18px;
      width: 44px;
      height: 44px;
    }

    .text {
      width: 197px;
    }

    .linkWrapper {
      margin-top: 26px;
    }
  }
`;
