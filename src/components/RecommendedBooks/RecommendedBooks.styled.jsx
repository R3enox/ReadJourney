import styled from 'styled-components';

export const RecommededWrapper = styled.section`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 40px 20px;

  .flexWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  .title {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: 20px 40px;
  }
`;
