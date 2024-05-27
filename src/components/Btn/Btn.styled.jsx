import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  min-width: 141px;
  background-color: transparent;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    border: 1px solid transparent;
    color: #1f1f1f;
    background-color: #f9f9f9;
  }

  @media (min-width: 768px) {
    min-width: 162px;
    padding: 14px 28px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const Lnk = styled(Link)`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 24px;
  min-width: 141px;
  background-color: transparent;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: #f9f9f9;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    border: 1px solid transparent;
    color: #1f1f1f;
    background-color: #f9f9f9;
  }
`;

export const ButtonSbmt = styled.button`
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

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.12;
      padding: 12px 28px;
      min-width: 122px;
    }
  }
`;
