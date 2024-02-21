import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { SearchState } from "./types";

const initialState: SearchState = {
  search: "",
};

export const useSearchSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setSearchSlice: (state, action: PayloadAction<string>) => {
      state.search = cloneDeep(action.payload);
    },
  },
});

export default useSearchSlice.reducer;
export const { setSearchSlice } = useSearchSlice.actions;
