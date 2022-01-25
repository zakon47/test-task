import { combineReducers } from "@reduxjs/toolkit";

import { appReducer } from "@/store/app/reducer";
import { formsReducer } from "@/store/forms/reducer";

const reducer = combineReducers({
  app: appReducer,
  forms: formsReducer,
});

export type RootState = ReturnType<typeof reducer>;

export { reducer };
