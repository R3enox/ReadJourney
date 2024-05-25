import styled, { css } from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 8px;

  .arrowLeft,
  .arrowRight {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid rgba(249, 249, 249, 0.2);
    background-color: transparent;
    padding: 8px;
  }

  .arrowIcon {
    width: 16px;
    height: 16px;
    stroke: #f9f9f9;
    fill: none;
  }
`;

export const BtnLeft = styled.button`
  ${({ page }) =>
    page === 1 &&
    css`
      border-color: rgba(249, 249, 249, 0.2);

      .left {
        stroke: rgba(249, 249, 249, 0.2);
      }
    `}
`;
