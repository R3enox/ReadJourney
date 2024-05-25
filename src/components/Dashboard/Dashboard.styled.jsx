import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 32px;
    gap: 32px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    padding: 20px;
    margin-top: 16px;
  }
`;
