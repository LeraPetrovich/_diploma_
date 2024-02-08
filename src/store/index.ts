import { configureStore } from "@reduxjs/toolkit";
import { paramItemsSlice } from "./reduser/setUserParamsSlice";
import { useSearchSlice } from "./reduser/searchReduserSlice";
import { userItemsSlice } from "./reduser/setUsersSlice";

const store = configureStore({
  reducer: {
    paramItemsReducer: paramItemsSlice.reducer,
    searchReduser: useSearchSlice.reducer,
    userItem: userItemsSlice.reducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
