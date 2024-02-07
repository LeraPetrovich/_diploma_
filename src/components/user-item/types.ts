import { AllColors } from "../healthStatusBlock/types";

interface UserItemProps {
  name: string;
  image?: string;
  id?: number;
}

export interface UserItemPropsWithContext extends UserItemProps {
  temperature: {
    title: string;
    status: AllColors;
    params: string;
  };
  pressure: {
    title: string;
    status: AllColors;
    params: string;
  };
  onHead: {
    title: string;
    status: AllColors;
    params: string;
  };
}
