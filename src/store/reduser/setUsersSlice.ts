import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

export type UserItemType = {
  id: number;
  name: string;
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

const initialState: UserItemsState = {
  userItems: [],
  userItem: {},
};

export const userItemsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setUserItemsSlice: (state, action: PayloadAction<UserItemType[]>) => {
      state.userItems = cloneDeep(action.payload);
    },
    setUserItemSlice: (state, action: PayloadAction<UserItemType>) => {
      state.userItem = cloneDeep(action.payload);
    },
  },
});

export default userItemsSlice.reducer;
export const { setUserItemsSlice, setUserItemSlice } = userItemsSlice.actions;
