import { baseApi } from "./api/baseApi";
import sidebarReducer from "./slices/sidebarSlice";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  sidebar: sidebarReducer,
};
