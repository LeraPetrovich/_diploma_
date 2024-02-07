// setUserItemsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

export type UserItemType = {
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
  userItem: UserItemType[];
}

const initialState: UserItemsState = {
  userItem: [],
};

export const userItemsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setUserItemSlice: (state, action: PayloadAction<UserItemType[]>) => {
      state.userItem = cloneDeep(action.payload);
    },
  },
});

export default userItemsSlice.reducer;
export const { setUserItemSlice } = userItemsSlice.actions;
