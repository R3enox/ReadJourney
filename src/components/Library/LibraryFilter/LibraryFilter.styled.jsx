import styled from 'styled-components';

export const Form = styled.form`
  .labelWrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  select {
    border: 1px solid #3e3e3e;
    border-radius: 12px;
    padding: 12px 14px;
    background-color: transparent;
    width: 120px;
    appearance: none;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #f9f9f9;
  }

  option {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: #686868;
    background-color: #262626;
  }

  @media (min-width: 768px) {
    select {
      padding: 14px;
      font-size: 14px;
      line-height: 1.29;
    }
  }

  @media (min-width: 1280px) {
    select {
      width: 153px;
    }
  }
`;

export const Wrapper = styled.div`
  .btnWrapper {
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 11px;
    right: 15px;
  }
  .iconChevron {
    pointer-events: none;
    stroke: #f9f9f9;
    fill: transparent;
    width: 16px;
    height: 16px;
  }
  .statusChevron {
    transition: transform 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }

  .statusChevron {
    transform: ${(prop) => (prop.$statusClick ? 'rotate(180deg)' : 'none')};
  }
`;
