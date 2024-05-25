import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #262626;
  padding: 20px 90px;

  .desc {
    display: none;
  }
  .circleWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .recWrapper {
    position: relative;
  }
  .icon-green-rec {
    position: absolute;
    top: 2px;
    left: -25px;
    width: 14px;
    height: 14px;
  }

  .totalAllRead {
    position: relative;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .pageTotal {
    font-size: 10px;
    line-height: 1, 2;
    letter-spacing: -0.02em;
    text-align: start;
    color: #686868;
  }

  @media (min-width: 768px) {
    width: 321px;
    padding: 28px 90px;

    .totalAllRead {
      font-size: 20px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .pageTotal {
      font-size: 12px;
      line-height: 1.17;
    }
  }
  @media (min-width: 1280px) {
    height: 281px;
  }
`;

export const Svg = styled.svg`
  width: 116px;
  height: 116px;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #1f1f1f;
  stroke-width: 10;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #30b94d;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dasharray 0.6s ease;
`;

export const Text = styled.text`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  fill: #f9f9f9;
`;
