import styled from "styled-components";

export const UserCameraBox = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    overflow: hidden;
    overflow-y: auto;
    z-index: 999;
  }
  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }
  .modal-content {
    position: relative;
    margin: 20px;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 40px 20px 20px 20px;
  }
  .modal-close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
  }
`;