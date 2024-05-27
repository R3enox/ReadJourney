import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .inptWrapper {
    position: relative;
  }

  .desc {
    position: absolute;
    font-size: 12px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
    top: 14px;
    left: 14px;
  }

  .inptForm {
    width: 100%;
    background-color: #262626;
    border-color: transparent;
    border: none;
    border-radius: 12px;
    padding: 14px 0 14px 77px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    outline: none;
  }

  .inptFormSecond {
    padding-left: 85px;
  }

  .inptForm:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  .inptForm::placeholder {
    color: #f9f9f9;
  }

  .btnSbmt {
    margin-top: 12px;
    border: 1px solid rgba(249, 249, 249, 0.2);
    background-color: transparent;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 98px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 0.02em;
    color: #f9f9f9;
    align-self: flex-start;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      border: 1px solid transparent;
      color: #1f1f1f;
      background-color: #f9f9f9;
    }
  }

  @media (min-width: 768px) {
    .inptForm {
      min-width: 295px;
      font-size: 14px;
      line-height: 1.29;
      padding: 16px 0 16px 86px;
    }

    .desc {
      font-size: 14px;
      top: 16px;
      left: 16px;
    }

    .btnSbmt {
      font-size: 16px;
      line-height: 1.12;
      padding: 12px 28px;
      min-width: 122px;
    }

    .inptFormSecond {
      padding-left: 95px;
    }
  }
`;
