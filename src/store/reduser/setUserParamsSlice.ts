import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

export type UserParamType = {
  id: number;
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

const initialState: UserParamsState = {
  paramItem: [],
};

export const paramItemsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setUserParamSlice: (state, action: PayloadAction<UserParamType[]>) => {
      state.paramItem = cloneDeep(action.payload);
    },
  },
});

export default paramItemsSlice.reducer;
export const { setUserParamSlice } = paramItemsSlice.actions;
