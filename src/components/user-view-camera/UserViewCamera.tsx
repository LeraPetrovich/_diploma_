import React from "react";
import { UserCameraBox } from "./UserViewCamera.styles";
import { ModalViewProps } from "./types";

export const UserViewCamera: React.FC<ModalViewProps> = ({
  isOpenModal,
  onClose,
}) => {
  const onWrapperClick = (event: any) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };
  return (
    <UserCameraBox style={{ display: isOpenModal ? "block" : "none" }}>
      <div className="modal">
        <div className="modal-wrapper" onClick={onWrapperClick}>
          <div className="modal-content">
            <button onClick={() => onClose()} className="modal-close-button">
              X
            </button>
          </div>
        </div>
      </div>
    </UserCameraBox>
  );
};
