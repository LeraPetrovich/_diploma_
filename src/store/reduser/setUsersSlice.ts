import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { type UserItemType, UserItemsState } from "./types";

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
