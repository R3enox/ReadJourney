import styled from 'styled-components';

export const LibraryListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;

  .imgBook {
    border-radius: 8px;
    width: 137px;
    height: 208px;
    margin-bottom: 8px;
  }

  .titleBook {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    max-width: 95px;
    margin-bottom: 2px;
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

  .textWrapper {
    position: relative;
  }

  .btnWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px;
    border: 1px solid rgba(232, 80, 80, 0.1);
    border-radius: 50%;
    background-color: transparent;
  }

  .iconTrash {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: #e85050;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 75px) / 4);

    .titleBook {
      max-width: 89px;
    }
    .btnWrapper {
      top: 0;
      right: 10px;
    }
  }
  @media (min-width: 1280px) {
    flex-wrap: wrap;
    flex-basis: calc((100% - 80px) / 5);
  }
`;
