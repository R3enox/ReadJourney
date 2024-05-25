import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #262626;
  border-radius: 12px;
  padding: 16px;
  overflow-y: auto;
  height: 211px;

  .statisticsList {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    border-left: 2px solid #1f1f1f;
    gap: 17px;
  }
  .datePageWrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .iconBW {
    left: -25px;
    position: absolute;
    width: 16px;
    height: 16px;
  }
  .date {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.02em;
  }

  .pageRead {
    margin-right: 24px;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  .percentageWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .totalReadInPercentage {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  .btnWrapper {
    border: none;
    background-color: transparent;
  }

  .svgWrapper {
    display: flex;
    gap: 6px;
  }
  .iconGraf {
    width: 44px;
    height: 18px;
  }
  .iconTrash {
    fill: none;
    stroke: #686868;
    width: 14px;
    height: 14px;
  }
  .minutesWrapper {
    display: flex;
    justify-content: space-between;
  }
  .differenceMinutes {
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }
  .speed {
    width: 43px;
    margin-right: 20px;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    color: #686868;
  }

  @media (min-width: 768px) {
    height: 252px;
    width: 321px;
    padding: 16px 16px 31px 24px;

    .statisticsList {
      gap: 14px;
    }

    .iconBW {
      left: -27px;
      width: 20px;
      height: 20px;
    }
    .date {
      font-size: 16px;
      line-height: 1.12;
    }
    .pageRead {
      font-size: 14px;
      line-height: 1.29;
    }
    .totalReadInPercentage {
      font-size: 20px;
      line-height: 1;
    }
    .iconGraf {
      width: 59px;
      height: 24px;
    }
    .differenceMinutes {
      font-size: 12px;
      line-height: 1.17;
    }
    .speed {
      width: 55px;
      margin-right: 20px;
      font-size: 12px;
      line-height: 1.17;
    }
  }
`;
