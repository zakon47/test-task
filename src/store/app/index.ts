import { actions } from "./reducer";
import * as thunk from "./thunk";

export const appAction = { ...thunk, ...actions };
