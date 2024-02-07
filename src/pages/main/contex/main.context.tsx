import { createContext, FunctionComponent, ReactNode } from "react";
import { AllColors } from "src/components/healthStatusBlock/types";

interface MainContextProps {
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
