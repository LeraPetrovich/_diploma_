export interface UserItemProps {
  name: string;
  image?: string;
  id?: number;
  onClick?: () => void;
}

export interface UserItemPropsWithContext extends UserItemProps {
  temperature: {
    title: string;
    status: string;
    params: string;
  };
  pressure: {
    title: string;
    status: string;
    params: string;
  };
  onHead: {
    title: string;
    status: string;
    params: string;
  };
}
