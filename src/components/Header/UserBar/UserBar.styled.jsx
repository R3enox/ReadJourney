import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 10px;
  .btnLogout {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
    margin-left: auto;
    margin-right: 0;

    .btnLogout {
      display: flex;
      border: 1px solid rgba(249, 249, 249, 0.2);
      border-radius: 30px;
      padding: 12px 28px;
      min-width: 114px;
      background-color: transparent;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.12;
      letter-spacing: 0.02em;
      color: #f9f9f9;
      white-space: nowrap;

      &:hover,
      &:focus {
        transition-duration: 300ms;
        border: 1px solid transparent;
        color: #1f1f1f;
        background-color: #f9f9f9;
      }
    }
  }

  @media (min-width: 1280px) {
    margin-left: 0;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Name = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #f9f9f9;
  background-color: #262626;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    line-height: 1.12;
  }
`;

export const FullName = styled.p`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }
`;
