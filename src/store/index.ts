import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userItemsSlice } from "./reduser/setUserItemsSlice";

const rootReducer = combineReducers({
  userItems: userItemsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = setupStore();

export type IRootState = ReturnType<typeof store.getState>;
