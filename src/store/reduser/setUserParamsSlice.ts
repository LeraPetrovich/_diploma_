import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { UserParamsState, type UserParamType } from "./types";

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
