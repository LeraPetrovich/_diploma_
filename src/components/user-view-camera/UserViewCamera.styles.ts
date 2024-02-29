import styled, { css } from "styled-components";
import { Icon } from "../user-item/UserItem.styles";

export const UserCameraBox = styled.div``;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  overflow-y: auto;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  border-radius: 20px;
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 20px;
  width: 100%;
  max-width: 1400px;
  border-radius: 20px;
  background-color: #ffffff;
`;

export const ModalCloseBotton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 30px;
  height: 30px;
  z-index: 90;
`;

export const UserCarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: 589px;
  border-radius: 20px;
`;

export const CollBlock = styled.div`
  background-color: black;
  opacity: 0.6;
  padding: 5px 20%;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonColl = styled.a`
  text-decoration: none;
  padding: 10px;
  background-color: #4f8ea0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const IconButton = styled(Icon)`
  width: 30px;
  height: 30px;
  box-sizing: border-box;
`;

export const ParamsBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ParamItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const ParamText = styled.p<{ status: string | undefined }>`
  margin: 0;
  padding: 0;
  color: ${(props) =>
    props.status === "good"
      ? "green"
      : props.status === "malaise"
      ? "yellow"
      : props.status === "badly"
      ? "red"
      : "inherit"};
`;
