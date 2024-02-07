import { createContext, FunctionComponent, ReactNode } from "react";
import { AllColors } from "src/components/healthStatusBlock/types";

interface MainContextProps {
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
  children?: ReactNode;
}

export const MainContext = createContext<MainContextProps | null>(null);

export const MainContextProvider: FunctionComponent<MainContextProps> = ({
  temperature,
  pressure,
  onHead,
  children,
}) => {
  return (
    <MainContext.Provider value={{ temperature, pressure, onHead }}>
      {children}
    </MainContext.Provider>
  );
};
