import { actions } from "./reducer";
import * as thunk from "./thunk";

export const formsAction = { ...thunk, ...actions };
