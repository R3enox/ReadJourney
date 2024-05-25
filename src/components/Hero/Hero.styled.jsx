import styled from 'styled-components';

export const Section = styled.section`
border-radius: 30px;
background-color: #1f1f1f;
padding: 20px 40px 0;

@media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: flex;
    padding: 80px 98px 0;
  }
`