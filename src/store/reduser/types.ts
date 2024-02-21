import { IFlightInformation, IWeeklyStatus } from "src/hooks/types";

export type UserItemType = {
  id: string;
  name: string;
  date: string;
  place: string;
  generalState: string;
  image?: string;
  licenseNumber?: string;
  categories?: string;
  dateBirth?: string;
  flightInformation: IFlightInformation;
  weeklyStatus: IWeeklyStatus[];
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
};

export interface UserItemsState {
  userItems: UserItemType[];
  userItem: UserItemType | {};
}

export type UserParamType = {
  id: string;
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
};

export interface UserParamsState {
  paramItem: UserParamType[];
}

export interface SearchState {
  search: string;
}
