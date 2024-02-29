type UserParams = {
  title: string;
  status: string;
  params: string;
};

export interface ModalViewProps {
  isOpenModal: boolean;
  onClose: () => void;
  temperature?: UserParams;
  onHead?: UserParams;
  pressure?: UserParams;
}
