import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";

import { reducer } from "./reducer";

const store = configureStore({
  reducer,
  middleware: [reduxThunk],
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducer", () => {
    store.replaceReducer(require("./reducer").reducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export { store };
