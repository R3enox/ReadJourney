import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.6);
  z-index: 99;

  &:hover {
    cursor: pointer;
  }

  .modal {
    position: relative;
    padding: 40px 50px;
    max-width: 335px;
    width: 100%;
    min-height: 421px;
    background-color: #1f1f1f;
    border: 1px solid rgba(104, 104, 104, 0.2);
    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      cursor: auto;
    }
  }

  .btnCross {
    border: none;
    background-color: transparent;
  }

  .iconClose {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 22px;
    height: 22px;
    stroke: #f9f9f9;
  }
`;
