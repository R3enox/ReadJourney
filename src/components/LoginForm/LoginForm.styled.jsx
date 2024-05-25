import styled from 'styled-components';

export const Section = styled.section`
  border-radius: 30px;
  background-color: #1f1f1f;
  padding: 20px 20px 40px;
  margin-top: 20px;

  .logoWrapper {
    display: flex;
    gap: 4px;
    margin-bottom: 40px;
  }

  .btnLogo {
    background-color: transparent;
    border: none;
  }

  .iconLogo {
    fill: #f9f9f9;
    width: 42px;
    height: 17px;
  }

  .textLogo {
    display: none;
  }

  .form-title {
    font-weight: 700;
    font-size: 30px;
    line-height: 1;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  }

  .fill-word {
    color: rgba(227, 227, 227, 0.5);
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 72px;
  }

  .inputWrapper {
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

  .inputForm {
    width: 100%;
    background-color: #262626;
    border-color: transparent;
    border: none;
    border-radius: 12px;
    padding: 14px 0 14px 59px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    outline: none;
  }

  .inputForm:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  .inputForm::placeholder {
    color: #f9f9f9;
  }

  .inputForm.error {
    border: 1px solid #e90516;
  }

  .inputForm.correct {
    border: 1px solid #30b94d;
  }

  .errorMsg {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #e90516;
    padding-left: 14px;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .correctMsg {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #30b94d;
    padding-left: 14px;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .iconError {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 15px;
    right: 18px;
    fill: #e90516;
  }

  .iconCorrect {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 14px;
    right: 18px;
    fill: #30b94d;
  }

  .inputFormPassword {
    width: 100%;
    background-color: #262626;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 14px 0 14px 80px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    outline: none;
  }

  .inputFormPassword:hover {
    border: 1px solid rgba(249, 249, 249, 0.1);
  }

  .inputFormPassword::placeholder {
    color: #f9f9f9;
  }

  .inputFormPassword.error {
    border: 1px solid #e90516;
  }

  .inputFormPassword.correct {
    border: 1px solid #30b94d;
  }

  .iconEye {
    position: absolute;
    stroke: #f9f9f9;
    fill: none;
    width: 18px;
    height: 18px;
    top: 13px;
    right: 16px;
  }

  .btnWrapper {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .btnSigin {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 30px;
    min-width: 131px;
    padding: 12px 45px;
    font-weight: 700;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.02em;
    color: #1f1f1f;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      border: 1px solid rgba(249, 249, 249, 0.2);
      background-color: transparent;
      color: #f9f9f9;
    }
  }

  .signLinkBtn {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    text-decoration: underline;
    color: #686868;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #f9f9f9;
    }
  }

  @media (min-width: 768px) {
    padding: 40px 64px 214px;
    margin-top: 32px;

    .logoWrapper {
      margin-bottom: 157px;
    }

    .textLogo {
      display: flex;
      font-weight: 700;
      font-size: 18px;
      line-height: 1;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #f9f9f9;
    }

    .form-title {
      font-weight: 700;
      font-size: 64px;
      line-height: 0.94;
      letter-spacing: 0.02em;
      max-width: 444px;
      margin-bottom: 40px;
    }

    .inputForm {
      max-width: 472px;
      padding: 16px 0px 16px 65px;
      font-size: 14px;
      line-height: 1.29;
    }

    .inputFormPassword {
      max-width: 472px;
      padding: 16px 0px 16px 86px;
      font-size: 14px;
      line-height: 1.29;
    }

    .desc {
      position: absolute;
      font-size: 14px;
      text-align: center;
      top: 16px;
      left: 14px;
    }

    .iconEye {
      width: 20px;
      height: 20px;
      top: 15px;
      right: 123px;
    }

    .inputContainer {
      gap: 14px;
      margin-bottom: 146px;
    }

    .btnWrapper {
      gap: 20px;
    }

    .btnSigin {
      padding: 16px 54px;
      min-width: 166px;
      font-size: 20px;
      line-height: 1;
      border: none;
    }

    .signLinkBtn {
      font-size: 14px;
      line-height: 1.29;
      text-decoration: underline;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 0;
    padding: 40px 64px;

    .logoWrapper {
      margin-bottom: 80px;
    }

    .iconEye {
      top: 15px;
      right: 18px;
    }
  }
`;
