import styled from 'styled-components';

export const RecommendedListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;

  .imgBook {
    border-radius: 8px;
    width: 137px;
    height: 208px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .titleBook {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    max-width: 137px;
    margin-bottom: 2px;
    width: 137px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .author {
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #686868;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 75px) / 4);
  }

  @media (min-width: 1280px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 80px) / 5);
  }
`;
