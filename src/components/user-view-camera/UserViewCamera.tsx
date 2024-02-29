import React from "react";
import {
  UserCameraBox,
  Modal,
  ModalWrapper,
  ModalContent,
  ModalCloseBotton,
  UserCarImage,
  CollBlock,
  ButtonColl,
  IconButton,
  ParamsBox,
  ParamItem,
  ParamText,
} from "./UserViewCamera.styles";
import { ModalViewProps } from "./types";
import user from "../../assets/user_card.jpeg";
import phone from "../../assets/phone.svg";
// import FaceDetectionComponent from "./user-image/UserImage";

export const UserViewCamera: React.FC<ModalViewProps> = ({
  isOpenModal,
  onClose,
  temperature,
  pressure,
  onHead,
}) => {
  const userParamItem = [
    {
      title: temperature?.title,
      param: temperature?.params,
      status: temperature?.status,
    },
    {
      title: pressure?.title,
      param: pressure?.params,
      status: pressure?.status,
    },
    {
      title: onHead?.title,
      param: onHead?.params,
      status: onHead?.status,
    },
  ];

  return (
    <UserCameraBox style={{ display: isOpenModal ? "block" : "none" }}>
      <Modal>
        <ModalWrapper>
          <ModalContent>
            <ModalCloseBotton onClick={() => onClose()}>X</ModalCloseBotton>
            <UserCarImage src={user} />
            {/* <FaceDetectionComponent imageUrl={user} /> */}
            <CollBlock>
              <ParamsBox>
                {userParamItem.map((el, index) => (
                  <ParamItem key={index}>
                    <ParamText status={el.status}>{el.title}</ParamText>
                    <ParamText status={el.status}>{el.param}</ParamText>
                  </ParamItem>
                ))}
              </ParamsBox>
              <ButtonColl href="">
                <IconButton src={phone} />
              </ButtonColl>
            </CollBlock>
          </ModalContent>
        </ModalWrapper>
      </Modal>
    </UserCameraBox>
  );
};
